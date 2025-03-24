import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, Suspense, lazy } from "react";
import ReactPixel from "react-facebook-pixel";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Porto = lazy(() => import("./pages/Porto"));
const Service = lazy(() => import("./pages/service/Service"));
const MainService = lazy(() => import("./pages/service/MainService"));
const Product = lazy(() => import("./pages/service/Product"));
const SubProduct = lazy(() => import("./pages/service/SubProduct"));
const Detail = lazy(() => import("./pages/service/Detail"));
const Blog = lazy(() => import("./pages/Blog"));
const PostDetail = lazy(() => import("./components/Blog/PostDetail"));
const ProjectDetail = lazy(() => import("./components/Portfolio/ProjectDetail"));

const pixelId = "547087064335063"; // Ganti dengan Pixel ID kamu

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ReactPixel.init(pixelId);
    ReactPixel.pageView(); // Kirim event saat halaman pertama dimuat
    setIsLoading(false);
  }, []);

  useEffect(() => {
    ReactPixel.pageView(); // Kirim event setiap kali halaman berubah
  }, [location]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default App;
