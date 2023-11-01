import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import NotFound from "./NotFound";
// import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
