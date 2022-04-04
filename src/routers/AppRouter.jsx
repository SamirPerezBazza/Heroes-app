import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginScreen from "../components/Login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const AppRouter = () => {

  //The BrowserRouter will automatically redirect any direction that is not /login
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/Heroes-App/login" element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        } />

        <Route path="/Heroes-App/*" element={
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>
        }
        />

      </Routes>
    </BrowserRouter>
  );
};
