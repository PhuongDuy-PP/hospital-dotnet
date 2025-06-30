import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Modal, Form, Pagination, Badge } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaCalendarAlt } from 'react-icons/fa';

// Mock data - In a real app, this would come from an API
const initialDoctors = [
  { id: 1, name: 'Dr. John Doe' },
  { id: 2, name: 'Dr. Jane Smith' },
  { id: 3, name: 'Dr. Emily White' },
  { id: 4, name: 'Dr. Michael Brown' },
];

const initialSchedules = [
  { id: 1, doctorId: 1, doctorName: 'Dr. John Doe', date: '2024-08-01', startTime: '09:00', endTime: '12:00', status: 'Available' },
  { id: 2, doctorId: 1, doctorName: 'Dr. John Doe', date: '2024-08-01', startTime: '14:00', endTime: '17:00', status: 'Booked' },
  { id: 3, doctorId: 2, doctorName: 'Dr. Jane Smith', date: '2024-08-02', startTime: '10:00', endTime: '13:00', status: 'Available' },
  { id: 4, doctorId: 3, doctorName: 'Dr. Emily White', date: '2024-08-02', startTime: '09:00', endTime: '17:00', status: 'Unavailable' },
  { id: 5, doctorId: 4, doctorName: 'Dr. Michael Brown', date: '2024-08-03', startTime: '08:00', endTime: '11:00', status: 'Available' },
];

function DoctorScheduleManagementPage() {
  const [schedules, setSchedules] = useState(initialSchedules);
  const [doctors, setDoctors] = useState(initialDoctors);
  const [showModal, setShowModal] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentSchedule(null);
    setIsEditing(false);
  };

  const handleShowModal = (schedule = null) => {
    if (schedule) {
      setCurrentSchedule({ ...schedule });
      setIsEditing(true);
    } else {
      setCurrentSchedule({ doctorId: '', date: '', startTime: '', endTime: '', status: 'Available' });
      setIsEditing(false);
    }
    setShowModal(true);
  };

  const handleSave = () => {
    const doctor = doctors.find(d => d.id === parseInt(currentSchedule.doctorId));
    const scheduleWithDoctorName = { ...currentSchedule, doctorName: doctor ? doctor.name : 'N/A' };

    if (isEditing) {
      setSchedules(schedules.map(s => (s.id === scheduleWithDoctorName.id ? scheduleWithDoctorName : s)));
    } else {
      const newSchedule = { ...scheduleWithDoctorName, id: Math.max(...schedules.map(s => s.id), 0) + 1 };
      setSchedules([...schedules, newSchedule]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this schedule?')) {
      setSchedules(schedules.filter(s => s.id !== id));
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentSchedule(prev => ({ ...prev, [name]: value }));
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = schedules.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(schedules.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Available':
        return <Badge bg="success">Available</Badge>;
      case 'Booked':
        return <Badge bg="warning">Booked</Badge>;
      case 'Unavailable':
        return <Badge bg="danger">Unavailable</Badge>;
      default:
        return <Badge bg="secondary">{status}</Badge>;
    }
  };

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h2 className="admin-page-title">
            <FaCalendarAlt className="me-2" /> Doctor Schedule Management
          </h2>
        </Col>
      </Row>

      <Card className="admin-card">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span>Schedules List</span>
          <Button variant="primary" onClick={() => handleShowModal()}>
            <FaPlus className="me-2" /> Add Schedule
          </Button>
        </Card.Header>
        <Card.Body>
          <Table responsive hover className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time Slot</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((schedule, index) => (
                <tr key={schedule.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{schedule.doctorName}</td>
                  <td>{schedule.date}</td>
                  <td>{`${schedule.startTime} - ${schedule.endTime}`}</td>
                  <td>{getStatusBadge(schedule.status)}</td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleShowModal(schedule)}>
                      <FaEdit />
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(schedule.id)}>
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
        {totalPages > 1 && (
            <Card.Footer>
                <Pagination className="justify-content-center mb-0">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
                        {i + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </Card.Footer>
        )}
      </Card>

      {/* Add/Edit Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Schedule' : 'Add New Schedule'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Doctor</Form.Label>
              <Form.Select name="doctorId" value={currentSchedule?.doctorId || ''} onChange={handleChange} required>
                <option value="" disabled>Select a doctor</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" value={currentSchedule?.date || ''} onChange={handleChange} />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Start Time</Form.Label>
                  <Form.Control type="time" name="startTime" value={currentSchedule?.startTime || ''} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>End Time</Form.Label>
                  <Form.Control type="time" name="endTime" value={currentSchedule?.endTime || ''} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select name="status" value={currentSchedule?.status || 'Available'} onChange={handleChange}>
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
                <option value="Unavailable">Unavailable</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {isEditing ? 'Save Changes' : 'Add Schedule'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default DoctorScheduleManagementPage; 