import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Modal, Form, Pagination, Badge } from 'react-bootstrap';
import { FaPlus, FaEdit, FaEye, FaVial } from 'react-icons/fa';

// Mock Data
const initialRequests = [
  { id: 1, medicalRecordId: 1, patientName: 'Peter Jones', testName: 'Complete Blood Count (CBC)', requestedAt: '2024-07-20T10:05:00Z', status: 'Completed' },
  { id: 2, medicalRecordId: 2, patientName: 'Mary White', testName: 'Lipid Panel', requestedAt: '2024-07-21T11:35:00Z', status: 'Pending' },
  { id: 3, medicalRecordId: 2, patientName: 'Mary White', testName: 'Thyroid Stimulating Hormone (TSH)', requestedAt: '2024-07-21T11:35:00Z', status: 'Pending' },
  { id: 4, medicalRecordId: 3, patientName: 'Peter Jones', testName: 'Urinalysis', requestedAt: '2024-07-28T09:20:00Z', status: 'Completed' },
];

// In a real app, these would be fetched from the API
const mockPatients = [{id: 1, name: 'Peter Jones'}, {id: 2, name: 'Mary White'}];
const mockLabTests = [{id: 1, name: 'Complete Blood Count (CBC)'}, {id: 2, name: 'Lipid Panel'}, {id: 3, name: 'Thyroid Stimulating Hormone (TSH)'}, {id: 4, name: 'Urinalysis'}];

function TestRequestManagementPage() {
  const [requests, setRequests] = useState(initialRequests);
  const [showModal, setShowModal] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentRequest(null);
    setIsEditing(false);
  };

  const handleShowModal = (request = null, editMode = false) => {
    if(request) {
        setCurrentRequest({ ...request });
    } else {
        // Mock data for a new request form
        setCurrentRequest({ patientName: '', testName: '', status: 'Pending'});
    }
    setIsEditing(editMode);
    setShowModal(true);
  };

  const handleSave = () => {
    if (isEditing) {
      setRequests(requests.map(r => (r.id === currentRequest.id ? currentRequest : r)));
    } else {
       const newRequest = { 
        ...currentRequest, 
        id: Math.max(...requests.map(r => r.id), 0) + 1,
        requestedAt: new Date().toISOString()
      };
      setRequests([...requests, newRequest]);
    }
    handleCloseModal();
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentRequest(prev => ({ ...prev, [name]: value }));
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending': return <Badge bg="warning" text="dark">Pending</Badge>;
      case 'Completed': return <Badge bg="success">Completed</Badge>;
      case 'Cancelled': return <Badge bg="danger">Cancelled</Badge>;
      default: return <Badge bg="secondary">{status}</Badge>;
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = requests.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(requests.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h2 className="admin-page-title"><FaVial className="me-2" /> Lab Test Request Management</h2>
        </Col>
      </Row>

      <Card className="admin-card">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span>Test Requests List</span>
           <Button variant="primary" onClick={() => handleShowModal(null, true)}><FaPlus className="me-2" /> New Request</Button>
        </Card.Header>
        <Card.Body>
          <Table responsive hover className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient</th>
                <th>Test Name</th>
                <th>Requested At</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((request, index) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.patientName}</td>
                  <td>{request.testName}</td>
                  <td>{new Date(request.requestedAt).toLocaleString()}</td>
                  <td>{getStatusBadge(request.status)}</td>
                  <td>
                    <Button variant="outline-primary" size="sm" onClick={() => handleShowModal(request, true)}>
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
                <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>{i + 1}</Pagination.Item>
              ))}
            </Pagination>
          </Card.Footer>
        )}
      </Card>

      {/* Add/Edit Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Update Test Request' : 'New Test Request'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Patient</Form.Label>
              <Form.Select name="patientName" value={currentRequest?.patientName || ''} onChange={handleChange} disabled={isEditing}>
                 <option value="" disabled>Select Patient</option>
                {mockPatients.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lab Test</Form.Label>
              <Form.Select name="testName" value={currentRequest?.testName || ''} onChange={handleChange} disabled={isEditing}>
                <option value="" disabled>Select Test</option>
                {mockLabTests.map(t => <option key={t.id} value={t.name}>{t.name}</option>)}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select name="status" value={currentRequest?.status || 'Pending'} onChange={handleChange}>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default TestRequestManagementPage; 