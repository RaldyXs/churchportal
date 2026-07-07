import Navbar from "./Navbar";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

/**
 * PublicLayout
 *
 * Plantilla para todas las páginas públicas.
 */

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}