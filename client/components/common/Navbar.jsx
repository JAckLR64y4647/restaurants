import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import logo from '../../assets/logo.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);

  const navLinks = (
    <>
      <Link to="/" className="block px-4 py-2 hover:text-blue-600">Главная</Link>
      <Link to="/restaurants" className="block px-4 py-2 hover:text-blue-600">Рестораны</Link>
    </>
  );

  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <Link to="/">
        <img src={logo} alt="Логотип" className="h-10" />
      </Link>

      {/* Бургер меню для мобильных */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Навигация: ПК */}
      <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700">
        {navLinks}
        {/* Меню профиля */}
        <div className="relative">
          <button onClick={toggleProfileMenu} className="flex items-center justify-center w-9 h-9 bg-gray-100 rounded-full hover:bg-gray-200">
            <User className="w-5 h-5" />
          </button>
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border z-50">
              <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">Профиль</Link>
              <button
                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                onClick={() => console.log("Logout")}
              >
                <LogOut className="inline-block w-4 h-4 mr-2" />
                Выйти
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Навигация: Мобильная версия */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t lg:hidden">
          <div className="flex flex-col py-2 text-sm text-gray-700">
            {navLinks}
            <hr className="my-2" />
            <Link to="/profile" className="px-4 py-2 hover:bg-gray-100">Профиль</Link>
            <button
              className="text-left px-4 py-2 text-red-500 hover:bg-gray-100"
              onClick={() => console.log("Logout")}
            >
              Выйти
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
