import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Modal, Form, Pagination } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaFlask } from 'react-icons/fa';

// Mock Data
const initialLabTests = [
  { id: 1, name: 'Complete Blood Count (CBC)', price: 45.00, description: 'Measures different components of blood.' },
  { id: 2, name: 'Lipid Panel', price: 60.00, description: 'Measures cholesterol and triglyceride levels.' },
  { id: 3, name: 'Thyroid Stimulating Hormone (TSH)', price: 75.00, description: 'Tests thyroid gland function.' },
  { id: 4, name: 'Urinalysis', price: 30.00, description: 'Analysis of urine for various compounds.' },
];

function LabTestManagementPage() {
  const [labTests, setLabTests] = useState(initialLabTests);
  const [showModal, setShowModal] = useState(false);
  const [currentTest, setCurrentTest] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentTest(null);
    setIsEditing(false);
  };

  const handleShowModal = (test = null) => {
    if (test) {
      setCurrentTest({ ...test });
      setIsEditing(true);
    } else {
      setCurrentTest({ name: '', price: 0, description: '' });
      setIsEditing(false);
    }
    setShowModal(true);
  };

  const handleSave = () => {
    if (isEditing) {
      setLabTests(labTests.map(t => (t.id === currentTest.id ? currentTest : t)));
    } else {
      const newTest = { ...currentTest, id: Math.max(...labTests.map(t => t.id), 0) + 1 };
      setLabTests([...labTests, newTest]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this lab test?')) {
      setLabTests(labTests.filter(t => t.id !== id));
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setCurrentTest(prev => ({ ...prev, [name]: type === 'number' ? parseFloat(value) : value }));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = labTests.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(labTests.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h2 className="admin-page-title"><FaFlask className="me-2" /> Lab Test Management</h2>
        </Col>
      </Row>

      <Card className="admin-card">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span>Available Lab Tests</span>
          <Button variant="primary" onClick={() => handleShowModal()}><FaPlus className="me-2" /> Add Lab Test</Button>
        </Card.Header>
        <Card.Body>
          <Table responsive hover className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Test Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((test, index) => (
                <tr key={test.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{test.name}</td>
                  <td>${test.price.toFixed(2)}</td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleShowModal(test)}>
                      <FaEdit />
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(test.id)}>
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
          <Modal.Title>{isEditing ? 'Edit Lab Test' : 'Add New Lab Test'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Test Name</Form.Label>
              <Form.Control type="text" name="name" value={currentTest?.name || ''} onChange={handleChange} placeholder="e.g., Complete Blood Count (CBC)" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price ($)</Form.Label>
              <Form.Control type="number" name="price" value={currentTest?.price || 0} onChange={handleChange} min="0" step="0.01" />
            </Form.Group>
             <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={currentTest?.description || ''} onChange={handleChange} placeholder="Enter a brief description of the test" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>
            {isEditing ? 'Save Changes' : 'Add Test'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default LabTestManagementPage; 