import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Components/About";
import Projects from "./Components/Projects";
import Landing from "./Components/Landing";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import NoPage from "./Components/NoPage";
import Nav from "./Components/Nav";



function App() {
  return (
    // <div >
    //   <h1>Hi, welcome to my portfolio site! I'm Bob Ross.</h1>
    // </div>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Nav />}> */}
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
