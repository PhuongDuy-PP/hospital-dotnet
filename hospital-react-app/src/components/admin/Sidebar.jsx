import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { 
    FaTachometerAlt, 
    FaUsers, 
    FaPills, 
    FaSignOutAlt,
    FaProcedures,
    FaUserMd,
    FaCalendarAlt,
    FaUserInjured,
    FaFileMedicalAlt,
    FaListOl,
    FaChevronDown,
    FaStethoscope,
    FaFlask,
    FaVial,
    FaClipboardCheck
} from 'react-icons/fa';
import './AdminStyles.css';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const [open, setOpen] = useState({
    staff: false,
    clinical: false,
    pharmacy: false,
    services: false,
  });

  const staffRoutes = ["/admin/users", "/admin/doctors", "/admin/doctor-schedules"];
  const clinicalRoutes = ["/admin/patients", "/admin/appointments", "/admin/waiting-list", "/admin/medical-records"];
  const pharmacyRoutes = ["/admin/medicines"];
  const servicesRoutes = ["/admin/medical-services", "/admin/lab-tests", "/admin/test-requests", "/admin/test-results"];

  useEffect(() => {
    setOpen({
      staff: staffRoutes.some(route => location.pathname.startsWith(route)),
      clinical: clinicalRoutes.some(route => location.pathname.startsWith(route)),
      pharmacy: pharmacyRoutes.some(route => location.pathname.startsWith(route)),
      services: servicesRoutes.some(route => location.pathname.startsWith(route)),
    });
  }, [location.pathname]);

  const toggleMenu = (menu) => {
    setOpen(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className={`admin-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="admin-sidebar-header">
        <Link to="/admin">
          <img src="/images/main-logo.png" alt="logo" className="admin-sidebar-logo" />
          <h3 className="admin-sidebar-title">Hospital Admin</h3>
        </Link>
      </div>
      <nav className="admin-menu">
        <ul className="admin-menu-list">
          {/* Dashboard */}
          <li>
            <NavLink to="/admin/dashboard" className="admin-menu-link">
              <FaTachometerAlt className="admin-menu-icon" />
              <span className="admin-menu-text">Tổng quan</span>
            </NavLink>
          </li>

          {/* Staff & Doctors Dropdown */}
          <li>
            <div className="admin-menu-link" onClick={() => toggleMenu('staff')} aria-expanded={open.staff}>
              <FaUsers className="admin-menu-icon" />
              <span className="admin-menu-text">Staff & Doctors</span>
              <FaChevronDown className={`arrow-icon ${open.staff ? 'open' : ''}`} />
            </div>
            <Collapse in={open.staff}>
              <ul className="admin-submenu">
                <li><NavLink to="/admin/users" className="admin-menu-link sub-link">User Management</NavLink></li>
                <li><NavLink to="/admin/doctors" className="admin-menu-link sub-link">Doctor Management</NavLink></li>
                <li><NavLink to="/admin/doctor-schedules" className="admin-menu-link sub-link">Doctor Schedules</NavLink></li>
              </ul>
            </Collapse>
          </li>
          
          {/* Patient & Clinical Dropdown */}
          <li>
            <div className="admin-menu-link" onClick={() => toggleMenu('clinical')} aria-expanded={open.clinical}>
              <FaUserInjured className="admin-menu-icon" />
              <span className="admin-menu-text">Patient & Clinical</span>
              <FaChevronDown className={`arrow-icon ${open.clinical ? 'open' : ''}`} />
            </div>
            <Collapse in={open.clinical}>
              <ul className="admin-submenu">
                <li><NavLink to="/admin/patients" className="admin-menu-link sub-link">Patient Management</NavLink></li>
                <li><NavLink to="/admin/appointments" className="admin-menu-link sub-link">Appointment Management</NavLink></li>
                <li><NavLink to="/admin/waiting-list" className="admin-menu-link sub-link">Waiting List</NavLink></li>
                <li><NavLink to="/admin/medical-records" className="admin-menu-link sub-link">Medical Records</NavLink></li>
              </ul>
            </Collapse>
          </li>

          {/* Services & Tests Dropdown */}
          <li>
            <div className="admin-menu-link" onClick={() => toggleMenu('services')} aria-expanded={open.services}>
              <FaStethoscope className="admin-menu-icon" />
              <span className="admin-menu-text">Services & Tests</span>
              <FaChevronDown className={`arrow-icon ${open.services ? 'open' : ''}`} />
            </div>
            <Collapse in={open.services}>
              <ul className="admin-submenu">
                <li><NavLink to="/admin/medical-services" className="admin-menu-link sub-link">Medical Services</NavLink></li>
                <li><NavLink to="/admin/lab-tests" className="admin-menu-link sub-link">Lab Tests</NavLink></li>
                <li><NavLink to="/admin/test-requests" className="admin-menu-link sub-link">Test Requests</NavLink></li>
                <li><NavLink to="/admin/test-results" className="admin-menu-link sub-link">Test Results</NavLink></li>
              </ul>
            </Collapse>
          </li>

          {/* Pharmacy Dropdown */}
          <li>
             <div className="admin-menu-link" onClick={() => toggleMenu('pharmacy')} aria-expanded={open.pharmacy}>
              <FaPills className="admin-menu-icon" />
              <span className="admin-menu-text">Pharmacy</span>
              <FaChevronDown className={`arrow-icon ${open.pharmacy ? 'open' : ''}`} />
            </div>
            <Collapse in={open.pharmacy}>
               <ul className="admin-submenu">
                <li><NavLink to="/admin/medicines" className="admin-menu-link sub-link">Medicine Management</NavLink></li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
      
      <div className="admin-sidebar-footer">
        <ul className="admin-menu-list">
            <li>
                <NavLink to="/" className="admin-menu-link">
                    <FaSignOutAlt className="admin-menu-icon" />
                    <span className="admin-menu-text">Về trang chủ</span>
                </NavLink>
            </li>
        </ul>
        <div className="admin-footer-text">
            © {new Date().getFullYear()} Hospital Project.
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
