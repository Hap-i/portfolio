// import Screen from "./components/terminal/Screen";
import { Route, Routes } from "react-router-dom";
import AllProjects from "./Pages/AllProjects";
import Blog from "./Pages/Blog";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/Home";
function App() {
  // TODO: Implement React Router
  // TODO: Implemnt redux
  // TODO: secret text for Events
  // TODO: hide scrollbar
  // TODO: loading screen at initial load
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects" element={<AllProjects />}></Route>
      <Route path="/contact" element={<ContactMe />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
    </Routes>
  );
}
export default App;
