import { Route, Routes } from "react-router";
import { Navbar } from "../components/UI/NavBar";
import DcScreen from "../components/DC/DcScreen";
import MarvelScreen from "../components/Marvel/MarvelScreen";
import SearchScreen from "../components/Search/SearchScreen";
import HeroScreen from "../components/Hero/HeroScreen";

const DashboardRoutes = () => {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          {/*
            The ":" indicates a param in the url that can be retrieved in the rendered component
          */}
          <Route path="/Heroes-App/hero/:heroId" element={<HeroScreen />} />
          <Route path="/Heroes-App/marvel" element={<MarvelScreen />} />
          <Route path="/Heroes-App/dc" element={<DcScreen />} />
          <Route path="/Heroes-App/search" element={<SearchScreen />} />
          <Route path="/Heroes-App/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
