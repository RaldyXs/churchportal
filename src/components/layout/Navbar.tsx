import { Link } from "react-router-dom";

/**
 * Navbar
 *
 * Responsabilidad:
 * Mostrar la navegación principal del portal.
 *
 * Notas:
 * - Usa <Link> para navegar sin recargar la página.
 * - Forma parte del PublicLayout.
 * - En futuras versiones mostrará el usuario autenticado
 *   y un menú responsive para móviles.
 */

export default function Navbar() {
  return (
    <header className="border-b bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo o nombre del portal */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700"
        >
          ChurchPortal
        </Link>

        {/* Menú principal */}
        <ul className="flex items-center gap-6">

          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>

          <li>
            <Link to="/eventos">Eventos</Link>
          </li>

          <li>
            <Link to="/donaciones">Donaciones</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

        </ul>

      </nav>
    </header>
  );
}