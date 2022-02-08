import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginScreen from "../components/Login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";

export const AppRouter = () => {

  //The BrowserRouter will automatically redirect any direction that is not /login
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
