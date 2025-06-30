import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Modal, Form, Pagination, Badge } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaUserInjured } from 'react-icons/fa';
import Avatar from '../../components/common/Avatar';

// Mock data reflecting the joined User + Patient model
const initialPatients = [
  { 
    id: 1, 
    userId: 201,
    fullName: 'Peter Jones', 
    username: 'peterjones',
    email: 'peter.jones@email.com', 
    phone: '555-0101', 
    gender: 'Male',
    dateOfBirth: '1990-06-15',
    address: '123 Main St, Anytown, USA',
    insuranceCode: 'ABC123456789',
    emergencyContact: 'Jane Jones - 555-0102',
    status: 'Active' 
  },
  { 
    id: 2, 
    userId: 202,
    fullName: 'Mary White', 
    username: 'marywhite',
    email: 'mary.white@email.com', 
    phone: '555-0103', 
    gender: 'Female',
    dateOfBirth: '1985-03-22',
    address: '456 Oak Ave, Anytown, USA',
    insuranceCode: 'XYZ987654321',
    emergencyContact: 'John White - 555-0104',
    status: 'Active' 
  },
];


function PatientManagementPage() {
  const [patients, setPatients] = useState(initialPatients);
  const [showModal, setShowModal] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentPatient(null);
    setIsEditing(false);
  };

  const handleShowModal = (patient = null) => {
    if (patient) {
      setCurrentPatient({ ...patient, password: '' }); 
      setIsEditing(true);
    } else {
      setCurrentPatient({ 
        fullName: '', username: '', password: '', email: '', phone: '', gender: 'Male', dateOfBirth: '',
        address: '', insuranceCode: '', emergencyContact: '', status: 'Active' 
      });
      setIsEditing(false);
    }
    setShowModal(true);
  };

  const handleSave = () => {
    if (isEditing) {
      setPatients(patients.map(p => p.id === currentPatient.id ? currentPatient : p));
    } else {
      const newPatient = { 
        ...currentPatient, 
        id: Math.max(...patients.map(p => p.id), 0) + 1,
        userId: Math.max(...patients.map(p => p.userId), 0) + 1,
       };
      setPatients([...patients, newPatient]);
    }
    handleCloseModal();
  };
  
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this patient? This will also remove their user account.')) {
      setPatients(patients.filter(p => p.id !== id));
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentPatient(prev => ({ ...prev, [name]: value }));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = patients.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(patients.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active': return <Badge bg="success">Active</Badge>;
      case 'Inactive': return <Badge bg="danger">Inactive</Badge>;
      default: return <Badge bg="secondary">{status}</Badge>;
    }
  };

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h2 className="admin-page-title"><FaUserInjured className="me-2" /> Patient Management</h2>
        </Col>
      </Row>

      <Card className="admin-card">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span>Patients List</span>
          <Button variant="primary" onClick={() => handleShowModal()}><FaPlus className="me-2" /> Add Patient</Button>
        </Card.Header>
        <Card.Body>
          <Table responsive hover className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Insurance Code</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((patient, index) => (
                <tr key={patient.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>
                    <div className="d-flex align-items-center">
                       <Avatar name={patient.fullName} />
                       <span className='ms-2'>{patient.fullName}</span>
                    </div>
                  </td>
                  <td>{patient.phone}</td>
                  <td>{patient.email}</td>
                  <td>{patient.insuranceCode}</td>
                  <td>{getStatusBadge(patient.status)}</td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleShowModal(patient)}><FaEdit /></Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(patient.id)}><FaTrash /></Button>
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
                        <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>{i + 1}</Pagination.Item>
                    ))}
                </Pagination>
            </Card.Footer>
        )}
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Patient' : 'Add New Patient'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <h5>User Account Details</h5>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" name="fullName" value={currentPatient?.fullName || ''} onChange={handleChange} placeholder="Enter full name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" name="username" value={currentPatient?.username || ''} onChange={handleChange} placeholder="Enter username" disabled={isEditing} />
                </Form.Group>
                 <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" value={currentPatient?.password || ''} onChange={handleChange} placeholder={isEditing ? 'Leave blank to keep current password' : 'Enter password'} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" name="email" value={currentPatient?.email || ''} onChange={handleChange} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" name="phone" value={currentPatient?.phone || ''} onChange={handleChange} placeholder="Enter phone number" />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control type="date" name="dateOfBirth" value={currentPatient?.dateOfBirth || ''} onChange={handleChange} />
                    </Form.Group>
                  </Col>
                  <Col>
                     <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select name="gender" value={currentPatient?.gender || 'Male'} onChange={handleChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <h5>Patient Specific Details</h5>
                 <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="textarea" rows={3} name="address" value={currentPatient?.address || ''} onChange={handleChange} placeholder="Enter full address" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Insurance Code</Form.Label>
                  <Form.Control type="text" name="insuranceCode" value={currentPatient?.insuranceCode || ''} onChange={handleChange} placeholder="e.g., ABC123456789" />
                </Form.Group>
                 <Form.Group className="mb-3">
                  <Form.Label>Emergency Contact</Form.Label>
                  <Form.Control type="text" name="emergencyContact" value={currentPatient?.emergencyContact || ''} onChange={handleChange} placeholder="e.g., Jane Doe - 555-0102" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Account Status</Form.Label>
                  <Form.Select name="status" value={currentPatient?.status || 'Active'} onChange={handleChange}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>{isEditing ? 'Save Changes' : 'Add Patient'}</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default PatientManagementPage; 