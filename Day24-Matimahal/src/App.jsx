import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Error404 from "./components/pages/Error404";
import Order from './components/home/Order'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Order />
      <Footer />
    </>
  );
}

export default App;
