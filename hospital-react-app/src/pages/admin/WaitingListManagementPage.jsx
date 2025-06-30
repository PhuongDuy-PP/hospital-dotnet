import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, Alert } from 'react-bootstrap';
import { FaListOl, FaCheck, FaUserSlash } from 'react-icons/fa';

// Mock Data
const initialWaitingList = [
  { id: 1, appointmentId: 201, patientName: 'David Lee', doctorName: 'Dr. John Doe', queueNumber: 1, status: 'Waiting' },
  { id: 2, appointmentId: 202, patientName: 'Laura Chen', doctorName: 'Dr. Jane Smith', queueNumber: 1, status: 'Waiting' },
  { id: 3, appointmentId: 203, patientName: 'Chris Green', doctorName: 'Dr. John Doe', queueNumber: 2, status: 'Waiting' },
  { id: 4, appointmentId: 204, patientName: 'Brenda Martinez', doctorName: 'Dr. Emily White', queueNumber: 1, status: 'Waiting' },
  { id: 5, appointmentId: 205, patientName: 'Tom Harris', doctorName: 'Dr. John Doe', queueNumber: 3, status: 'Waiting' },
];

function WaitingListManagementPage() {
  const [waitingList, setWaitingList] = useState(initialWaitingList);

  const handleCallNext = (doctorId) => {
    setWaitingList(prevList => {
      const newList = [...prevList];
      const doctorQueue = newList
        .filter(p => p.doctorName === doctorId && p.status === 'Waiting')
        .sort((a, b) => a.queueNumber - b.queueNumber);

      if (doctorQueue.length > 0) {
        // Find the patient currently being served for this doctor and mark as Done
        const currentlyServingPatient = newList.find(p => p.doctorName === doctorId && p.status === 'Serving');
        if(currentlyServingPatient) {
            currentlyServingPatient.status = 'Done';
        }

        // Mark the next patient as 'Serving'
        const nextPatient = newList.find(p => p.id === doctorQueue[0].id);
        if (nextPatient) {
          nextPatient.status = 'Serving';
        }
      }
      return newList;
    });
  };

  const handleRemove = (patientId) => {
     if (window.confirm('Are you sure you want to remove this patient from the waiting list?')) {
        setWaitingList(prevList => prevList.map(p => p.id === patientId ? {...p, status: 'Cancelled'} : p));
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Waiting': return <Badge bg="warning" text="dark">Waiting</Badge>;
      case 'Serving': return <Badge bg="success">Now Serving</Badge>;
      case 'Done': return <Badge bg="secondary">Done</Badge>;
      case 'Cancelled': return <Badge bg="danger">Cancelled</Badge>;
      default: return <Badge bg="light" text="dark">{status}</Badge>;
    }
  };

  // Group waiting list by doctor
  const groupedByDoctor = useMemo(() => {
    const groups = waitingList.reduce((acc, patient) => {
      const { doctorName } = patient;
      if (!acc[doctorName]) {
        acc[doctorName] = [];
      }
      acc[doctorName].push(patient);
      return acc;
    }, {});

    // Sort patients within each group
    for(const doctor in groups) {
        groups[doctor].sort((a,b) => a.queueNumber - b.queueNumber);
    }
    return groups;
  }, [waitingList]);

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h2 className="admin-page-title"><FaListOl className="me-2" /> Waiting List Management</h2>
        </Col>
      </Row>

      {Object.keys(groupedByDoctor).length === 0 && <Alert variant='info'>The waiting list is currently empty.</Alert>}

      <Row>
        {Object.entries(groupedByDoctor).map(([doctorName, patients]) => (
          <Col md={6} lg={4} key={doctorName} className="mb-4">
            <Card className="admin-card h-100">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">{doctorName}'s Queue</span>
                <Button variant="primary" size="sm" onClick={() => handleCallNext(doctorName)}>
                  Call Next
                </Button>
              </Card.Header>
              <Card.Body>
                <Table hover responsive className="waiting-list-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Patient Name</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map(p => (
                      <tr key={p.id} className={p.status === 'Serving' ? 'table-success' : ''}>
                        <td className="fw-bold">{p.queueNumber}</td>
                        <td>{p.patientName}</td>
                        <td>{getStatusBadge(p.status)}</td>
                        <td>
                          {p.status === 'Waiting' &&
                            <Button variant="outline-danger" size="sm" onClick={() => handleRemove(p.id)}>
                              <FaUserSlash/>
                            </Button>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WaitingListManagementPage; 