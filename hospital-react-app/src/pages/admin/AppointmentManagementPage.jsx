import React, { useState } from 'react';
import { Table, Button, Modal, Pagination, Badge, Row, Col } from 'react-bootstrap';
import Avatar from '../../components/common/Avatar';
import { FaUserMd, FaUserInjured, FaCalendarAlt, FaClock, FaStethoscope, FaInfoCircle, FaBirthdayCake, FaPhone, FaEnvelope } from 'react-icons/fa';

const AppointmentManagementPage = () => {
    const [appointments, setAppointments] = useState([
        { 
            id: 1, 
            patient: { name: 'Trần Thị B', avatar: null, dob: '15/05/1990', phone: '0905123456' }, 
            doctor: { name: 'Nguyễn Văn A', avatar: 'https://broken.link/a.jpg', specialty: 'Tim mạch', email: 'nguyenvana@hospital.com' }, 
            date: '2023-10-28', time: '09:00 AM', status: 'Đã xác nhận', reason: 'Khám định kỳ' 
        },
        { 
            id: 2, 
            patient: { name: 'Phạm Văn D', avatar: 'https://via.placeholder.com/150', dob: '20/08/1985', phone: '0912987654' }, 
            doctor: { name: 'Lê Thị E', avatar: null, specialty: 'Nội tổng quát', email: 'lethie@hospital.com' }, 
            date: '2023-10-28', time: '10:30 AM', status: 'Chờ xác nhận', reason: 'Đau bụng' 
        },
        { 
            id: 3, 
            patient: { name: 'Vũ Thị F', avatar: null, dob: '10/11/2001', phone: '0988111222' }, 
            doctor: { name: 'Nguyễn Văn A', avatar: 'https://broken.link/a.jpg', specialty: 'Tim mạch', email: 'nguyenvana@hospital.com' }, 
            date: '2023-10-29', time: '11:00 AM', status: 'Hoàn thành', reason: 'Tái khám' 
        },
        { 
            id: 4, 
            patient: { name: 'Đặng Văn G', avatar: null, dob: '01/02/1978', phone: '0934555666' }, 
            doctor: { name: 'Bùi Thị H', avatar: null, specialty: 'Da liễu', email: 'buithih@hospital.com' }, 
            date: '2023-10-29', time: '01:00 PM', status: 'Đã hủy', reason: 'Dị ứng' 
        },
        { 
            id: 5, 
            patient: { name: 'Ngô Thị K', avatar: 'https://via.placeholder.com/150', dob: '03/04/1995', phone: '0977888999' }, 
            doctor: { name: 'Lê Thị E', avatar: null, specialty: 'Nội tổng quát', email: 'lethie@hospital.com' }, 
            date: '2023-10-30', time: '08:00 AM', status: 'Chờ xác nhận', reason: 'Ho, sốt' 
        },
        { 
            id: 6, 
            patient: { name: 'Hoàng Văn L', avatar: null, dob: '12/12/1992', phone: '0915123789' }, 
            doctor: { name: 'Bùi Thị H', avatar: null, specialty: 'Da liễu', email: 'buithih@hospital.com' }, 
            date: '2023-10-31', time: '09:30 AM', status: 'Đã xác nhận', reason: 'Kiểm tra da' 
        },
        { 
            id: 7, 
            patient: { name: 'Mai Thị M', avatar: 'https://via.placeholder.com/150', dob: '07/07/1988', phone: '0987654321' }, 
            doctor: { name: 'Nguyễn Văn A', avatar: 'https://broken.link/a.jpg', specialty: 'Tim mạch', email: 'nguyenvana@hospital.com' }, 
            date: '2023-10-31', time: '10:00 AM', status: 'Hoàn thành', reason: 'Theo dõi huyết áp' 
        },
        { 
            id: 8, 
            patient: { name: 'Lý Văn N', avatar: null, dob: '09/01/2000', phone: '0909090909' }, 
            doctor: { name: 'Lê Thị E', avatar: null, specialty: 'Nội tổng quát', email: 'lethie@hospital.com' }, 
            date: '2023-11-01', time: '02:00 PM', status: 'Chờ xác nhận', reason: 'Cảm cúm' 
        },
        { 
            id: 9, 
            patient: { name: 'Trịnh Thị P', avatar: null, dob: '25/03/1997', phone: '0966555444' }, 
            doctor: { name: 'Bùi Thị H', avatar: null, specialty: 'Da liễu', email: 'buithih@hospital.com' }, 
            date: '2023-11-01', time: '03:00 PM', status: 'Đã hủy', reason: 'Việc đột xuất' 
        },
        { 
            id: 10, 
            patient: { name: 'Đỗ Văn Q', avatar: 'https://via.placeholder.com/150', dob: '18/06/1980', phone: '0944333222' }, 
            doctor: { name: 'Nguyễn Văn A', avatar: 'https://broken.link/a.jpg', specialty: 'Tim mạch', email: 'nguyenvana@hospital.com' }, 
            date: '2023-11-02', time: '08:30 AM', status: 'Đã xác nhận', reason: 'Đau ngực' 
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const appointmentsPerPage = 5;

    const handleShowModal = (appointment) => {
        setSelectedAppointment(appointment);
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Đã xác nhận': return 'primary';
            case 'Hoàn thành': return 'success';
            case 'Đã hủy': return 'danger';
            case 'Chờ xác nhận': return 'warning';
            default: return 'secondary';
        }
    };

    const indexOfLastAppointment = currentPage * appointmentsPerPage;
    const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
    const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);
    const totalPages = Math.ceil(appointments.length / appointmentsPerPage);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="admin-header"><h1>Quản lý Lịch hẹn</h1></div>
            <div className="admin-card">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Bệnh nhân</th>
                            <th>Bác sĩ</th>
                            <th>Ngày</th>
                            <th>Giờ</th>
                            <th className="text-center">Trạng thái</th>
                            <th className="text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentAppointments.map(apt => (
                            <tr key={apt.id}>
                                <td style={{ verticalAlign: 'middle' }}>{apt.id}</td>
                                <td style={{ verticalAlign: 'middle' }}>{apt.patient.name}</td>
                                <td style={{ verticalAlign: 'middle' }}>{apt.doctor.name}</td>
                                <td style={{ verticalAlign: 'middle' }}>{apt.date}</td>
                                <td style={{ verticalAlign: 'middle' }}>{apt.time}</td>
                                <td className="text-center" style={{ verticalAlign: 'middle' }}>
                                    <Badge bg={getStatusBadge(apt.status)}>{apt.status}</Badge>
                                </td>
                                <td className="text-center" style={{ verticalAlign: 'middle' }}>
                                    <Button variant="outline-info" size="sm" onClick={() => handleShowModal(apt)}>Xem chi tiết</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {totalPages > 1 && (
                    <Pagination className="justify-content-center">
                        {[...Array(totalPages).keys()].map(number => (
                            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                                {number + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                )}
            </div>

            <AppointmentDetailModal 
                show={showModal} 
                onHide={handleCloseModal} 
                appointment={selectedAppointment} 
                getStatusBadge={getStatusBadge}
            />
        </div>
    );
};

const AppointmentDetailModal = ({ show, onHide, appointment, getStatusBadge }) => {
    if (!appointment) return null;

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Chi tiết Lịch hẹn #{appointment.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="appointment-modal-body">
                <Row className="g-4">
                    <Col xs={6} className="d-flex">
                        <div className="info-block h-100 w-100">
                            <div className="avatar-container"><Avatar src={appointment.patient.avatar} name={appointment.patient.name} size={90} /></div>
                            <div className="name">{appointment.patient.name}</div>
                            <div className="specialty text-muted"><FaUserInjured className="me-2" /> Bệnh nhân</div>
                            <div className="info-block-detail"><FaBirthdayCake /> {appointment.patient.dob}</div>
                            <div className="info-block-detail"><FaPhone /> {appointment.patient.phone}</div>
                        </div>
                    </Col>
                    <Col xs={6} className="d-flex">
                        <div className="info-block h-100 w-100">
                            <div className="avatar-container"><Avatar src={appointment.doctor.avatar} name={appointment.doctor.name} size={90} /></div>
                            <div className="name">{appointment.doctor.name}</div>
                            <div className="specialty text-muted"><FaUserMd className="me-2" /> {appointment.doctor.specialty}</div>
                            <div className="info-block-detail"><FaEnvelope /> {appointment.doctor.email}</div>
                        </div>
                    </Col>
                </Row>

                <div className="details-block">
                    <div className="detail-item"><div className="detail-item-icon"><FaCalendarAlt /></div><div><strong>Ngày:</strong> {appointment.date}</div></div>
                    <div className="detail-item"><div className="detail-item-icon"><FaClock /></div><div><strong>Giờ:</strong> {appointment.time}</div></div>
                    <div className="detail-item"><div className="detail-item-icon"><FaStethoscope /></div><div><strong>Lý do khám:</strong> {appointment.reason}</div></div>
                    <div className="detail-item"><div className="detail-item-icon"><FaInfoCircle /></div><div><strong>Trạng thái:</strong> <Badge bg={getStatusBadge(appointment.status)}>{appointment.status}</Badge></div></div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Đóng</Button>
                {appointment.status === 'Chờ xác nhận' && (
                    <>
                        <Button variant="success">Xác nhận</Button>
                        <Button variant="danger">Hủy lịch</Button>
                    </>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default AppointmentManagementPage;
