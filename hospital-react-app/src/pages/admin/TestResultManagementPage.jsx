import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Modal, Form, Pagination } from 'react-bootstrap';
import { FaClipboardCheck, FaEdit, FaEye, FaPlus } from 'react-icons/fa';

// Mock Data
const initialResults = [
  { 
    id: 1, 
    testRequestId: 1, 
    patientName: 'Peter Jones', 
    testName: 'Complete Blood Count (CBC)',
    result: 'All values within normal range.',
    resultDate: '2024-07-21T09:00:00Z'
  },
  { 
    id: 2, 
    testRequestId: 4, 
    patientName: 'Peter Jones', 
    testName: 'Urinalysis',
    result: 'No abnormalities detected.',
    resultDate: '2024-07-29T14:00:00Z'
  },
  // Note: Requests for Mary White are still pending, so no results yet.
];

// In a real app, these would be fetched from the API
const mockPendingRequests = [
    {id: 2, patientName: 'Mary White', testName: 'Lipid Panel'},
    {id: 3, patientName: 'Mary White', testName: 'Thyroid Stimulating Hormone (TSH)'}
];

function TestResultManagementPage() {
  const [results, setResults] = useState(initialResults);
  const [showModal, setShowModal] = useState(false);
  const [currentResult, setCurrentResult] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentResult(null);
    setIsEditing(false);
  };

  const handleShowModal = (result = null, editMode = false) => {
    if(result) {
        // Find corresponding request info for display
        const requestInfo = initialRequests.find(r => r.id === result.testRequestId) || {};
        setCurrentResult({ ...result, patientName: requestInfo.patientName, testName: requestInfo.testName });
    } else {
        // Form to add a new result for a pending request
        setCurrentResult({ testRequestId: '', result: '', resultDate: new Date().toISOString()});
    }
    setIsEditing(editMode);
    setShowModal(true);
  };

  const handleSave = () => {
    // In a real app, this would be a PUT/POST request.
    // POST for a new result, PUT to update an existing one.
    if (currentResult.id) { // Editing existing result
      setResults(results.map(r => (r.id === currentResult.id ? currentResult : r)));
    } else { // Adding a new result
      const requestInfo = mockPendingRequests.find(r => r.id === parseInt(currentResult.testRequestId));
      const newResult = { 
        ...currentResult,
        id: Math.max(...results.map(r => r.id), 0) + 1,
        patientName: requestInfo.patientName,
        testName: requestInfo.testName,
        resultDate: new Date(currentResult.resultDate).toISOString()
      };
      setResults([...results, newResult]);
    }
    handleCloseModal();
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentResult(prev => ({ ...prev, [name]: value }));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(results.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h2 className="admin-page-title"><FaClipboardCheck className="me-2" /> Test Result Management</h2>
        </Col>
      </Row>

      <Card className="admin-card">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span>Test Results List</span>
          <Button variant="primary" onClick={() => handleShowModal(null, true)}>
            <FaPlus className="me-2" /> Add Result
          </Button>
        </Card.Header>
        <Card.Body>
          <Table responsive hover className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient</th>
                <th>Test Name</th>
                <th>Result Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((result, index) => (
                <tr key={result.id}>
                  <td>{result.id}</td>
                  <td>{result.patientName}</td>
                  <td>{result.testName}</td>
                  <td>{new Date(result.resultDate).toLocaleString()}</td>
                  <td>
                     <Button variant="outline-info" size="sm" className="me-2" onClick={() => handleShowModal(result, false)}>
                      <FaEye />
                    </Button>
                    <Button variant="outline-primary" size="sm" onClick={() => handleShowModal(result, true)}>
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

      {/* Add/Edit/View Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? (currentResult?.id ? 'Edit Test Result' : 'Add Test Result') : 'View Test Result'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
             {currentResult?.id ? ( // Viewing or Editing existing result
                <>
                    <Row className="mb-3">
                        <Col><p><strong>Patient:</strong> {currentResult.patientName}</p></Col>
                        <Col><p><strong>Test:</strong> {currentResult.testName}</p></Col>
                    </Row>
                    <hr/>
                </>
             ) : ( // Adding a new result
                <Form.Group className="mb-3">
                    <Form.Label>Pending Test Request</Form.Label>
                    <Form.Select name="testRequestId" value={currentResult?.testRequestId || ''} onChange={handleChange}>
                        <option value="" disabled>Select a pending test...</option>
                        {mockPendingRequests.map(req => (
                            <option key={req.id} value={req.id}>{req.patientName} - {req.testName}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
             )}

            <Form.Group className="mb-3">
              <Form.Label>Result</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5} 
                name="result" 
                value={currentResult?.result || ''} 
                onChange={handleChange} 
                placeholder="Enter test result details..." 
                readOnly={!isEditing} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Result Date</Form.Label>
                <Form.Control 
                    type="datetime-local"
                    name="resultDate"
                    value={currentResult?.resultDate ? new Date(currentResult.resultDate).toISOString().slice(0, 16) : ''}
                    onChange={handleChange}
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

export default TestResultManagementPage; 