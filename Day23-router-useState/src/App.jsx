import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Error404 from "./pages/Error404";
import Modal from "./pages/Modal";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
