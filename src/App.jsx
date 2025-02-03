import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavbarComponent from './Components/pages/Navbar';
import Nav1 from './Components/pages/Nav1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/pages/Hero';
import Clients from './Components/pages/Clients';
import Contact from './Components/pages/Contact';
import Registration1 from './Components/pages/Registration1';
import Agreement from './Components/pages/Agreement';
import Dashboard from './Components/pages/Dashboard';
import PendingOrders from "./Components/pages/PendingOrders";
import Candidates from "./Components/pages/Candidates";
import Navigation1 from "./Components/pages/Navigation1";
import { useState, useEffect } from 'react';
import Feedback  from "./Components/pages/Feedback";
import Favourites  from "./Components/pages/Favourites";
import Delivered  from "./Components/pages/Delivered";
import Profile  from "./Components/pages/Profile";
import Forgot  from "./Components/pages/Forgot";
import OTP  from "./Components/pages/OTP";
import CreatePassword  from "./Components/pages/CreatePassword";
import Payment1  from "./Components/pages/Payment1";
import Worker1  from "./Components/pages/Worker1";
import ChangePassword1  from "./Components/pages/ChangePassword1";
import Language  from "./Components/pages/Language";

function AppContent() {
  const [useNav1, setUseNav1] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const navbarRoutes = ["/", "/clients", "/registration", "/success",
      "/forgot-password","/verification", "/createPassword","/contact","/worker"];
    if (navbarRoutes.includes(location.pathname)) {
      setUseNav1(false);
    } else {
      setUseNav1(true);
    }
  }, [location.pathname]);

  return (
    <div>
      {useNav1 ? <Nav1 /> : <NavbarComponent />}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/registration" element={<Registration1 />} />
        <Route path="/success" element={<Agreement />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pendingOrders" element={<PendingOrders />} />
        <Route path="/candidate" element={<Candidates />} />
        <Route path="/navigation" element={<Navigation1 />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/delivered" element={<Delivered />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/verification" element={<OTP />} />
        <Route path="/createPassword" element={<CreatePassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment1 />} />
        <Route path="/worker" element={<Worker1/>} />
        <Route path="/changePassword" element={<ChangePassword1/>} />
        <Route path="/changeLanguage" element={<Language/>} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
