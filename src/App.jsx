import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Porto from "./pages/Porto";
import Service from "./pages/service/Service";
import MainService from "./pages/service/MainService";
import Product from "./pages/service/Product";
import SubProduct from "./pages/service/SubProduct";
import Detail from "./pages/service/Detail";
import Blog from "./pages/Blog";
import PostDetail from "./components/Blog/PostDetail";
import ProjectDetail from "./components/Portfolio/ProjectDetail";

const pixelId = "547087064335063"; // Ganti dengan Pixel ID kamu

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactPixel.init(pixelId);
    ReactPixel.pageView(); // Kirim event saat halaman pertama dimuat
  }, []);

  useEffect(() => {
    ReactPixel.pageView(); // Kirim event setiap kali halaman berubah
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<MainService />}>
        <Route path="" element={<Service />} />
        <Route path=":idCategory" element={<Outlet />}>
          <Route path="" element={<Product />} />
          <Route path=":idProduct" element={<Outlet />}>
            <Route path="" element={<SubProduct />} />
            <Route path=":idSubProduct" element={<Detail />} />
          </Route>
        </Route>
      </Route>
      <Route path="/blog" element={<Blog />} />
      <Route path="/post/:idPost" element={<PostDetail />} />
      <Route path="/portfolio" element={<Porto />} />
      <Route path="/project/:idProject" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
