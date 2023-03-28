// import Screen from "./components/terminal/Screen";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import AllProjects from "./Pages/AllProjects";
import Blog from "./Pages/Blog";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/Home";
function App() {
  // DONE: Implement React Router
  // TODO: Implemnt redux
  // TODO: secret text for Events
  // TODO: hide scrollbar
  // TODO: loading screen at initial load
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/project" element={<AllProjects />}></Route>
      <Route path="/contact" element={<ContactMe />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}
export default App;
