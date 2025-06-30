import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Modal, Form, Pagination } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaStethoscope } from 'react-icons/fa';

// Mock Data
const initialServices = [
  { id: 1, name: 'General Check-up', type: 'Consultation', price: 50.00, description: 'A comprehensive general health examination.' },
  { id: 2, name: 'Ultrasound Scan', type: 'Imaging', price: 120.00, description: 'Standard diagnostic ultrasound imaging.' },
  { id: 3, name: 'Blood Test - Full Panel', type: 'Laboratory', price: 80.00, description: 'Complete blood count and metabolic panel.' },
  { id: 4, name: 'X-Ray', type: 'Imaging', price: 75.00, description: 'Chest X-Ray for diagnostic purposes.' },
  { id: 5, name: 'Dental Cleaning', type: 'Dental', price: 65.00, description: 'Standard teeth cleaning and polishing.' },
];

function MedicalServiceManagementPage() {
  const [services, setServices] = useState(initialServices);
  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentService(null);
    setIsEditing(false);
  };

  const handleShowModal = (service = null) => {
    if (service) {
      setCurrentService({ ...service });
      setIsEditing(true);
    } else {
      setCurrentService({ name: '', type: '', price: 0, description: '' });
      setIsEditing(false);
    }
    setShowModal(true);
  };

  const handleSave = () => {
    if (isEditing) {
      setServices(services.map(s => (s.id === currentService.id ? currentService : s)));
    } else {
      const newService = { ...currentService, id: Math.max(...services.map(s => s.id), 0) + 1 };
      setServices([...services, newService]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this medical service?')) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setCurrentService(prev => ({ ...prev, [name]: type === 'number' ? parseFloat(value) : value }));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = services.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h2 className="admin-page-title"><FaStethoscope className="me-2" /> Medical Service Management</h2>
        </Col>
      </Row>

      <Card className="admin-card">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span>Medical Services List</span>
          <Button variant="primary" onClick={() => handleShowModal()}><FaPlus className="me-2" /> Add Service</Button>
        </Card.Header>
        <Card.Body>
          <Table responsive hover className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Service Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((service, index) => (
                <tr key={service.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{service.name}</td>
                  <td>{service.type}</td>
                  <td>${service.price.toFixed(2)}</td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleShowModal(service)}>
                      <FaEdit />
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(service.id)}>
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
          <Modal.Title>{isEditing ? 'Edit Medical Service' : 'Add New Service'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Service Name</Form.Label>
              <Form.Control type="text" name="name" value={currentService?.name || ''} onChange={handleChange} placeholder="e.g., General Check-up" />
            </Form.Group>
             <Form.Group className="mb-3">
              <Form.Label>Service Type</Form.Label>
              <Form.Control type="text" name="type" value={currentService?.type || ''} onChange={handleChange} placeholder="e.g., Consultation, Imaging" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price ($)</Form.Label>
              <Form.Control type="number" name="price" value={currentService?.price || 0} onChange={handleChange} min="0" step="0.01" />
            </Form.Group>
             <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={currentService?.description || ''} onChange={handleChange} placeholder="Enter a brief description of the service" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>
            {isEditing ? 'Save Changes' : 'Add Service'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default MedicalServiceManagementPage; 