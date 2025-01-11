import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceSection from "./components/Service";
import Home from "./components/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicesection" element={<ServiceSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
