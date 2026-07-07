import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout que actúa como contenedor común (Navbar, Footer, etc.)
import PublicLayout from "../components/layout/PublicLayout";

// Importación de las páginas de la aplicación
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import EventsPage from "../pages/EventsPage";
import DonatePage from "../pages/DonatePage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";

/**
 * Componente principal de enrutamiento de la aplicación.
 * Define la estructura de navegación y la aplicación de layouts compartidos.
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas anidadas bajo el Layout Público.
          Todas las rutas hijas dentro de este bloque renderizarán de forma automática 
          el Navbar superior y el Footer inferior a través del componente <Outlet />.
        */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/donaciones" element={<DonatePage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Route>

        {/* Rutas independientes de la estructura pública estándar.
          Estas páginas se renderizan en pantalla completa, omitiendo el Navbar y Footer comunes.
        */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        
        {/* Captura de rutas no definidas (Error 404) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}