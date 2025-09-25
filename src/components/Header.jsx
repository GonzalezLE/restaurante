import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    // 👇 Añadimos `relative` aquí para que el menú absoluto se posicione respecto al header
    <header className="bg-masa/80 backdrop-blur-sm sticky top-0 z-50 relative">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-bold text-milpa" onClick={handleLinkClick}>MAÍZ</Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/filosofia" className="hover:text-elote transition-colors duration-300">Nuestra Filosofía</Link>
          <Link to="/menu" className="hover:text-elote transition-colors duration-300">Menú</Link>
          <Link to="/chefs" className="hover:text-elote transition-colors duration-300">Nuestros Chefs</Link>
          <Link to="/reservar" className="bg-milpa text-masa font-bold py-2 px-5 rounded-full hover:bg-elote hover:text-comal transition-all duration-300">Reservar</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-comal focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* --- MENÚ DESPLEGABLE CORREGIDO --- */}
      {/* 👇 Añadimos `absolute w-full` para que ocupe todo el ancho y "flote" */}
      <div className={`absolute w-full bg-masa/95 shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link to="/filosofia" className="block py-4 px-6 text-center hover:bg-elote/20" onClick={handleLinkClick}>Nuestra Filosofía</Link>
        <Link to="/menu" className="block py-4 px-6 text-center hover:bg-elote/20" onClick={handleLinkClick}>Menú</Link>
        <Link to="/chefs" className="block py-4 px-6 text-center hover:bg-elote/20" onClick={handleLinkClick}>El Chef</Link>
        <Link to="/reservar" className="block py-4 px-6 text-center bg-milpa text-masa font-bold" onClick={handleLinkClick}>Reservar</Link>
      </div>
    </header>
  );
}

export default Header;