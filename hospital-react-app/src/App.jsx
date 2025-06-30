import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from "./components/layout/Layout";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BlogPage from "./pages/BlogPage";
import BlogSinglePage from "./pages/BlogSinglePage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import ReviewPage from "./pages/ReviewPage";
import PricingPage from "./pages/PricingPage";
import GalleryPage from "./pages/GalleryPage";

// Admin pages
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagementPage from './pages/admin/UserManagementPage';
import AppointmentManagementPage from './pages/admin/AppointmentManagementPage';
import MedicineManagementPage from './pages/admin/MedicineManagementPage';
import DoctorManagementPage from './pages/admin/DoctorManagementPage';
import DoctorScheduleManagementPage from './pages/admin/DoctorScheduleManagementPage';
import PatientManagementPage from './pages/admin/PatientManagementPage';
import MedicalRecordManagementPage from './pages/admin/MedicalRecordManagementPage';
import WaitingListManagementPage from './pages/admin/WaitingListManagementPage';
import MedicalServiceManagementPage from './pages/admin/MedicalServiceManagementPage';
import LabTestManagementPage from './pages/admin/LabTestManagementPage';
import TestRequestManagementPage from './pages/admin/TestRequestManagementPage';
import TestResultManagementPage from './pages/admin/TestResultManagementPage';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        {/* Frontend Routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/departments" element={<Layout><DepartmentsPage /></Layout>} />
        <Route path="/booking" element={<Layout><BookingPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/blog/:id" element={<Layout><BlogSinglePage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/team" element={<Layout><TeamPage /></Layout>} />
        <Route path="/review" element={<Layout><ReviewPage /></Layout>} />
        <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
        <Route path="/gallery"element={<Layout><GalleryPage/></Layout>}/>

        {/* Auth routes that shouldn't have the main layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<UserManagementPage />} />
          <Route path="doctors" element={<DoctorManagementPage />} />
          <Route path="doctor-schedules" element={<DoctorScheduleManagementPage />} />

          {/* Patient & Clinical Routes */}
          <Route path="patients" element={<PatientManagementPage />} />
          <Route path="appointments" element={<AppointmentManagementPage />} />
          <Route path="medical-records" element={<MedicalRecordManagementPage />} />
          <Route path="waiting-list" element={<WaitingListManagementPage />} />

          {/* Services & Tests Routes */}
          <Route path="medical-services" element={<MedicalServiceManagementPage />} />
          <Route path="lab-tests" element={<LabTestManagementPage />} />
          <Route path="test-requests" element={<TestRequestManagementPage />} />
          <Route path="test-results" element={<TestResultManagementPage />} />

          {/* Pharmacy Routes */}
          <Route path="medicines" element={<MedicineManagementPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
