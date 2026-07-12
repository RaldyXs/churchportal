/**
 * AppRouter.tsx
 *
 * Define las rutas principales de ChurchPortal.
 *
 * Responsabilidades:
 * - Asociar cada URL con una página.
 * - Aplicar el layout público.
 * - Mostrar una página 404 para rutas inexistentes.
 */

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import PublicLayout from "../components/layout/PublicLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas que usan Navbar y Footer */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* Rutas independientes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Captura cualquier dirección inexistente */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}