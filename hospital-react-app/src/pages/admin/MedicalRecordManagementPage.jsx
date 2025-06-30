import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Modal, Form, Pagination, Badge } from 'react-bootstrap';
import { FaFileMedicalAlt, FaEdit, FaEye } from 'react-icons/fa';

// Mock Data
const initialMedicalRecords = [
  { 
    id: 1, 
    appointmentId: 101, 
    patientName: 'Peter Jones',
    doctorName: 'Dr. John Doe',
    appointmentDate: '2024-07-20',
    diagnosis: 'Common Cold', 
    conclusion: 'Prescribed rest and fluids. Follow up if symptoms worsen.',
    createdAt: '2024-07-20T10:00:00Z'
  },
  { 
    id: 2, 
    appointmentId: 102, 
    patientName: 'Mary White',
    doctorName: 'Dr. Jane Smith',
    appointmentDate: '2024-07-21',
    diagnosis: 'Migraine', 
    conclusion: 'Advised lifestyle changes and prescribed pain relievers.',
    createdAt: '2024-07-21T11:30:00Z'
  },
    { 
    id: 3, 
    appointmentId: 103, 
    patientName: 'Peter Jones',
    doctorName: 'Dr. John Doe',
    appointmentDate: '2024-07-28',
    diagnosis: 'Follow-up check', 
    conclusion: 'Patient recovering well. No further medication needed at this time.',
    createdAt: '2024-07-28T09:15:00Z'
  },
];

function MedicalRecordManagementPage() {
  const [records, setRecords] = useState(initialMedicalRecords);
  const [showModal, setShowModal] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentRecord(null);
    setIsEditing(false);
  };

  const handleShowModal = (record, editMode = false) => {
    setCurrentRecord({ ...record });
    setIsEditing(editMode);
    setShowModal(true);
  };

  const handleSave = () => {
    // In a real app, this would be a PUT/POST request to the API
    setRecords(records.map(r => r.id === currentRecord.id ? currentRecord : r));
    handleCloseModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentRecord(prev => ({ ...prev, [name]: value }));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = records.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(records.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h2 className="admin-page-title"><FaFileMedicalAlt className="me-2" /> Medical Record Management</h2>
        </Col>
      </Row>

      <Card className="admin-card">
        <Card.Header>
          <span>Medical Records List</span>
        </Card.Header>
        <Card.Body>
          <Table responsive hover className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Appointment Date</th>
                <th>Diagnosis</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((record, index) => (
                <tr key={record.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{record.patientName}</td>
                  <td>{record.doctorName}</td>
                  <td>{record.appointmentDate}</td>
                  <td>{record.diagnosis}</td>
                  <td>
                    <Button variant="outline-info" size="sm" className="me-2" onClick={() => handleShowModal(record, false)}>
                      <FaEye />
                    </Button>
                    <Button variant="outline-primary" size="sm" onClick={() => handleShowModal(record, true)}>
                      <FaEdit />
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

      {/* View/Edit Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Medical Record' : 'View Medical Record'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <p><strong>Patient:</strong> {currentRecord?.patientName}</p>
              </Col>
              <Col md={6}>
                <p><strong>Doctor:</strong> {currentRecord?.doctorName}</p>
              </Col>
            </Row>
             <Row className="mb-3">
              <Col md={6}>
                <p><strong>Appointment Date:</strong> {currentRecord?.appointmentDate}</p>
              </Col>
              <Col md={6}>
                <p><strong>Record Created At:</strong> {new Date(currentRecord?.createdAt).toLocaleString()}</p>
              </Col>
            </Row>
            <hr />
            <Form.Group className="mb-3">
              <Form.Label>Diagnosis</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4} 
                name="diagnosis" 
                value={currentRecord?.diagnosis || ''} 
                onChange={handleChange} 
                placeholder="Enter diagnosis details" 
                readOnly={!isEditing} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Conclusion & Treatment Plan</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4} 
                name="conclusion" 
                value={currentRecord?.conclusion || ''} 
                onChange={handleChange} 
                placeholder="Enter conclusion and treatment plan"
                readOnly={!isEditing}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          {isEditing && <Button variant="primary" onClick={handleSave}>Save Changes</Button>}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default MedicalRecordManagementPage; 