import Home from "./components/Home";
import Build from "./components/Build";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />/
        <Route path="/create" element={<Build />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
