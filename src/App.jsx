import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import NotFound from './Pages/NotFound.jsx';
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx';
import CourseList from './Pages/Course/CourseList.jsx';
import Contact from './Pages/Contact.jsx';
import Denied from './Pages/Denied.jsx';
import CourseDescription from './Pages/Course/CourseDescription.jsx';
import RequireAuth from './Components/Auth/RequireAuth.jsx';
import CreateCourse from './Pages/Course/CreateCourse.jsx';
import Profile from './Pages/User/Profile.jsx';
import EditProfile from './Pages/User/EditProfile.jsx';
import ChangePassword from './Pages/User/ChangePassword.jsx';
import Checkout from './Pages/Payment/Checkout.jsx';
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess.jsx';
import CheckoutFailure from './Pages/Payment/CheckoutFailure.jsx';
import DisplayLectures from './Pages/Dashboard/DisplayLectures.jsx';
import AddLecture from './Pages/Dashboard/AddLecture.jsx';
import AdminDashboard from './Pages/Dashboard/AdminDashboard.jsx';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/course/description" element={<CourseDescription />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/denied" element={<Denied />} />

      {/* Admin Protected Routes */}
      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
        <Route path="/course/create" element={<CreateCourse />} />
        <Route path="/course/addlecture" element={<AddLecture />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route>

      {/* Authenticated User Routes */}
      <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/editprofile" element={<EditProfile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/checkout/fail" element={<CheckoutFailure />} />
        <Route path="/course/displaylectures" element={<DisplayLectures />} />
      </Route>

      {/* Wildcard Fallback MUST be the last element */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;