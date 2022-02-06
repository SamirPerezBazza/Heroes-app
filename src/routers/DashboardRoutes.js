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
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
