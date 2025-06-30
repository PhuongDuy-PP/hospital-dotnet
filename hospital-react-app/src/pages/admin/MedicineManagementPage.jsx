import React, { useState, useMemo } from 'react';
import { 
    Table, Button, Modal, Form, Pagination, InputGroup, FormControl,
    Row, Col, DropdownButton, Dropdown, Badge
} from 'react-bootstrap';
import { FaPills, FaSearch, FaPlus, FaEdit, FaTrash, FaLayerGroup } from 'react-icons/fa';

// Mock Data
const initialDrugGroups = [
    { id: 1, name: 'Thuốc giảm đau', description: 'Giảm các cơn đau từ nhẹ đến nặng.' },
    { id: 2, name: 'Thuốc kháng sinh', description: 'Chống nhiễm trùng do vi khuẩn.' },
    { id: 3, name: 'Thuốc kháng viêm', description: 'Giảm viêm, sưng, đau.' },
    { id: 4, name: 'Thuốc tim mạch', description: 'Điều trị các bệnh liên quan đến tim và mạch máu.' },
];

const initialMedicines = [
    { id: 1, code: 'PARA500', genericName: 'Paracetamol', tradeName: 'Panadol', activeIngredient: 'Paracetamol', strength: '500mg', dosageForm: 'Viên nén', manufacturer: 'GSK', expiryDate: '2025-12-31', groupId: 1 },
    { id: 2, code: 'AMOX250', genericName: 'Amoxicillin', tradeName: 'Amoxil', activeIngredient: 'Amoxicillin', strength: '250mg', dosageForm: 'Viên nang', manufacturer: 'Pfizer', expiryDate: '2024-08-15', groupId: 2 },
    { id: 3, code: 'IBU400', genericName: 'Ibuprofen', tradeName: 'Advil', activeIngredient: 'Ibuprofen', strength: '400mg', dosageForm: 'Viên nén', manufacturer: 'Johnson & Johnson', expiryDate: '2026-05-20', groupId: 3 },
    { id: 4, code: 'ATORV10', genericName: 'Atorvastatin', tradeName: 'Lipitor', activeIngredient: 'Atorvastatin', strength: '10mg', dosageForm: 'Viên nén', manufacturer: 'Pfizer', expiryDate: '2025-02-10', groupId: 4 },
    { id: 5, code: 'CELE200', genericName: 'Celecoxib', tradeName: 'Celebrex', activeIngredient: 'Celecoxib', strength: '200mg', dosageForm: 'Viên nang', manufacturer: 'Pfizer', expiryDate: '2024-11-30', groupId: 3 },
];

const MedicineManagementPage = () => {
    const [medicines, setMedicines] = useState(initialMedicines);
    const [drugGroups, setDrugGroups] = useState(initialDrugGroups);

    // State for modals
    const [showMedicineModal, setShowMedicineModal] = useState(false);
    const [showGroupModal, setShowGroupModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    
    // State for forms and deletion
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentMedicine, setCurrentMedicine] = useState({});
    const [medicineToDelete, setMedicineToDelete] = useState(null);

    // State for filters
    const [searchTerm, setSearchTerm] = useState('');
    const [groupFilter, setGroupFilter] = useState('');
    const [manufacturerFilter, setManufacturerFilter] = useState('');

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const manufacturers = useMemo(() => [...new Set(medicines.map(m => m.manufacturer))], [medicines]);

    const filteredMedicines = useMemo(() => {
        return medicines
            .map(med => ({ ...med, groupName: drugGroups.find(g => g.id === med.groupId)?.name || 'N/A' }))
            .filter(med => {
                const expiryDate = new Date(med.expiryDate);
                const isExpired = expiryDate < new Date();
                
                return (
                    (med.tradeName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                     med.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                     med.code.toLowerCase().includes(searchTerm.toLowerCase())) &&
                    (groupFilter === '' || med.groupId === parseInt(groupFilter)) &&
                    (manufacturerFilter === '' || med.manufacturer === manufacturerFilter)
                );
            });
    }, [medicines, drugGroups, searchTerm, groupFilter, manufacturerFilter]);
    
    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredMedicines.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredMedicines.length / itemsPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Handlers for Medicine Modal
    const handleShowMedicineModal = (medicine = null) => {
        setIsEditMode(!!medicine);
        setCurrentMedicine(medicine ? { ...medicine } : {
            code: '', genericName: '', tradeName: '', activeIngredient: '', 
            strength: '', dosageForm: '', manufacturer: '', expiryDate: '', groupId: ''
        });
        setShowMedicineModal(true);
    };
    const handleCloseMedicineModal = () => setShowMedicineModal(false);
    const handleSaveMedicine = () => {
        if (isEditMode) {
            setMedicines(medicines.map(m => m.id === currentMedicine.id ? currentMedicine : m));
        } else {
            setMedicines([...medicines, { ...currentMedicine, id: medicines.length + 1 }]);
        }
        handleCloseMedicineModal();
    };

    // Handlers for Delete Modal
    const handleShowDeleteModal = (id) => {
        setMedicineToDelete(id);
        setShowDeleteModal(true);
    };
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleDeleteConfirm = () => {
        setMedicines(medicines.filter(m => m.id !== medicineToDelete));
        handleCloseDeleteModal();
    };
    
    // Handlers for Group Modal
    const handleShowGroupModal = () => setShowGroupModal(true);
    const handleCloseGroupModal = () => setShowGroupModal(false);

    const getExpiryBadge = (expiryDate) => {
        const today = new Date();
        const expiry = new Date(expiryDate);
        const diffTime = expiry - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays <= 0) return <Badge bg="danger">Hết hạn</Badge>;
        if (diffDays <= 30) return <Badge bg="warning">Sắp hết hạn</Badge>;
        return <Badge bg="success">Còn hạn</Badge>;
    }

    return (
        <div>
            <div className="admin-header"><h1>Quản lý Thuốc</h1></div>
            
            <div className="admin-card mb-4 p-3">
                <Row className="g-3 align-items-end">
                    <Col lg={4} md={12} sm={12}>
                        <Form.Group controlId="searchTerm">
                            <Form.Label>Tìm kiếm thuốc</Form.Label>
                            <InputGroup>
                                <InputGroup.Text><FaSearch /></InputGroup.Text>
                                <FormControl 
                                    placeholder="Theo tên, mã thuốc..." 
                                    onChange={e => setSearchTerm(e.target.value)} 
                                />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <Form.Group controlId="groupFilter">
                            <Form.Label>Nhóm thuốc</Form.Label>
                            <InputGroup>
                                <Form.Select value={groupFilter} onChange={e => setGroupFilter(e.target.value)}>
                                    <option value="">Tất cả nhóm thuốc</option>
                                    {drugGroups.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                                </Form.Select>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <Form.Group controlId="manufacturerFilter">
                            <Form.Label>Nhà sản xuất</Form.Label>
                            <InputGroup>
                                <Form.Select value={manufacturerFilter} onChange={e => setManufacturerFilter(e.target.value)}>
                                    <option value="">Tất cả nhà sản xuất</option>
                                    {manufacturers.map(m => <option key={m} value={m}>{m}</option>)}
                                </Form.Select>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col lg={2} md={12} sm={12} className="text-lg-end">
                         <Button 
                            variant="primary" 
                            onClick={() => handleShowMedicineModal()} 
                            className="w-100"
                        >
                            <FaPlus className="me-2"/>Thêm mới
                        </Button>
                    </Col>
                </Row>
            </div>

            <div className="admin-card">
                <div className="d-flex justify-content-end mb-3">
                    <Button variant="outline-secondary" size="sm" onClick={handleShowGroupModal}>
                        <FaLayerGroup /> Quản lý Nhóm thuốc
                    </Button>
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Mã thuốc</th>
                            <th>Tên thương mại</th>
                            <th>Nhóm dược lý</th>
                            <th>Nhà sản xuất</th>
                            <th className="text-center">Hạn sử dụng</th>
                            <th className="text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(med => (
                            <tr key={med.id}>
                                <td>{med.code}</td>
                                <td>{med.tradeName}</td>
                                <td>{med.groupName}</td>
                                <td>{med.manufacturer}</td>
                                <td className="text-center">{getExpiryBadge(med.expiryDate)}</td>
                                <td className="text-center">
                                    <Button variant="outline-info" size="sm" onClick={() => handleShowMedicineModal(med)}><FaEdit /></Button>{' '}
                                    <Button variant="outline-danger" size="sm" onClick={() => handleShowDeleteModal(med.id)}><FaTrash /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {totalPages > 1 && (
                    <Pagination className="justify-content-center">
                        {[...Array(totalPages).keys()].map(n => (
                            <Pagination.Item key={n+1} active={n+1 === currentPage} onClick={() => paginate(n+1)}>
                                {n+1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                )}
            </div>

            {/* Add/Edit Medicine Modal */}
            <Modal show={showMedicineModal} onHide={handleCloseMedicineModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{isEditMode ? 'Chỉnh sửa Thuốc' : 'Thêm Thuốc mới'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={6}><Form.Group className="mb-3">
                                <Form.Label>Mã thuốc</Form.Label>
                                <Form.Control type="text" value={currentMedicine.code} onChange={e => setCurrentMedicine({...currentMedicine, code: e.target.value})} />
                            </Form.Group></Col>
                            <Col md={6}><Form.Group className="mb-3">
                                <Form.Label>Nhóm dược lý</Form.Label>
                                <Form.Select value={currentMedicine.groupId} onChange={e => setCurrentMedicine({...currentMedicine, groupId: parseInt(e.target.value)})}>
                                     <option>Chọn nhóm thuốc</option>
                                     {drugGroups.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                                </Form.Select>
                            </Form.Group></Col>
                        </Row>
                         <Row>
                            <Col md={6}><Form.Group className="mb-3">
                                <Form.Label>Tên gốc</Form.Label>
                                <Form.Control type="text" value={currentMedicine.genericName} onChange={e => setCurrentMedicine({...currentMedicine, genericName: e.target.value})} />
                            </Form.Group></Col>
                            <Col md={6}><Form.Group className="mb-3">
                                <Form.Label>Tên thương mại</Form.Label>
                                <Form.Control type="text" value={currentMedicine.tradeName} onChange={e => setCurrentMedicine({...currentMedicine, tradeName: e.target.value})} />
                            </Form.Group></Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Hoạt chất</Form.Label>
                            <Form.Control type="text" value={currentMedicine.activeIngredient} onChange={e => setCurrentMedicine({...currentMedicine, activeIngredient: e.target.value})} />
                        </Form.Group>
                         <Row>
                            <Col md={6}><Form.Group className="mb-3">
                                <Form.Label>Hàm lượng</Form.Label>
                                <Form.Control type="text" value={currentMedicine.strength} onChange={e => setCurrentMedicine({...currentMedicine, strength: e.target.value})} />
                            </Form.Group></Col>
                            <Col md={6}><Form.Group className="mb-3">
                                <Form.Label>Dạng bào chế</Form.Label>
                                <Form.Control type="text" value={currentMedicine.dosageForm} onChange={e => setCurrentMedicine({...currentMedicine, dosageForm: e.target.value})} />
                            </Form.Group></Col>
                        </Row>
                         <Row>
                            <Col md={6}><Form.Group className="mb-3">
                                <Form.Label>Nhà sản xuất</Form.Label>
                                <Form.Control type="text" value={currentMedicine.manufacturer} onChange={e => setCurrentMedicine({...currentMedicine, manufacturer: e.target.value})} />
                            </Form.Group></Col>
                            <Col md={6}><Form.Group className="mb-3">
                                <Form.Label>Hạn sử dụng</Form.Label>
                                <Form.Control type="date" value={currentMedicine.expiryDate} onChange={e => setCurrentMedicine({...currentMedicine, expiryDate: e.target.value})} />
                            </Form.Group></Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseMedicineModal}>Hủy</Button>
                    <Button variant="primary" onClick={handleSaveMedicine}>Lưu thay đổi</Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận Xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xóa thuốc này không?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>Không</Button>
                    <Button variant="danger" onClick={handleDeleteConfirm}>Xóa</Button>
                </Modal.Footer>
            </Modal>
            
            {/* Group Management Modal */}
            <Modal show={showGroupModal} onHide={handleCloseGroupModal} size="lg">
                 <Modal.Header closeButton>
                    <Modal.Title>Quản lý Nhóm thuốc</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* For simplicity, this is a read-only list. A full implementation would have add/edit/delete for groups too. */}
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên nhóm</th>
                                <th>Mô tả</th>
                            </tr>
                        </thead>
                        <tbody>
                            {drugGroups.map(group => (
                                <tr key={group.id}>
                                    <td>{group.id}</td>
                                    <td>{group.name}</td>
                                    <td>{group.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                     <Button variant="secondary" onClick={handleCloseGroupModal}>Đóng</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MedicineManagementPage;
