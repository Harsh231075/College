import Footer from "./components/Footor"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import AdmissionPage from "./pages/AdmissionPage"
import PlacemenetPage from "./pages/PlacementPage"
import CoursesPage from './pages/CoursesPage'
import CourseDetailsPage from "./pages/CourseDetailsPage"
import { Routes, Route, useLocation } from "react-router-dom"
import FacilitiesPage from "./pages/FacilitiesPage"
import AboutPage from "./pages/AboutPage"
import FaclityPage from "./pages/FaclityPage"
import Admission from "./pages/ Admission"
import FeePage from "./pages/FeePage"
import AcademicPage from "./pages/AcademicPage "
import CollegeGallery from './pages/CollegeGallery'
import BtechPage from "./Btech/BtechPage"
import ScholarshipPage from "./pages/ScholarshipPage"
import CollegeScholarshipPage from "./pages/CollegeScholarshipPage"
import SportsScholarshipPage from "./pages/SportsScholarshipPage"
import ControlRoute from "./Events/ControlRoute"
import HackRoute from "./Hackethon/HackRoute"
import ContactPage from "./Home/ContactPage"

function App() {
  const location = useLocation();
  const hideNavbarFooter = [].includes(
    location.pathname
  );
  return (
    <>
      <Navbar></Navbar>
      <main className="mt-16 mb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/admission" element={<AdmissionPage></AdmissionPage>} />
          <Route path="/placement" element={<PlacemenetPage></PlacemenetPage>} />
          <Route path="/courses" element={<CoursesPage></CoursesPage>} />
          <Route path="/course-details/:courseId" element={<CourseDetailsPage />} />
          <Route path="/facilities" element={<FacilitiesPage></FacilitiesPage>} />
          <Route path='/about' element={<AboutPage></AboutPage>} />
          <Route path="/faculty" element={<FaclityPage></FaclityPage>} />
          <Route path="/join" element={<Admission></Admission>} />
          <Route path="/fee" element={<FeePage />} />
          <Route path="/academics" element={<AcademicPage />} />
          <Route path="/gallery" element={<CollegeGallery />} />
          <Route path="/btech" element={<BtechPage />} />
          <Route path="/goverment" element={<ScholarshipPage />} />
          <Route path='/collegeSholarship' element={<CollegeScholarshipPage />} />
          <Route path="/sportSholarship" element={<SportsScholarshipPage />} />
          <Route path="/event/:id" element={<ControlRoute />} />
          <Route path="/club/:id" element={<HackRoute />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
