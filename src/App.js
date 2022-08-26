import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Build from "./components/Build";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
// import AppRouter from "./AppRouter";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="content">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />/
            <Route path="/create" element={<Build />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<BlogDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
