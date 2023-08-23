import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/pages/Home";
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Container from "./components/layouts/Container";
import NavBar from "./components/layouts/NavBar"
import Footer from "./components/layouts/Footer"

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min_height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
