import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";; // Icônes du menu burger

export default function Header () {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Charger la préférence utilisateur du mode sombre
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Basculer entre le mode clair et sombre
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Mon Portfolio</h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Accueil</Link>
          <Link href="/about" className="hover:text-gray-400">À propos</Link>
          <Link href="/projects" className="hover:text-gray-400">Projets</Link>
          <Link href="/skills" className="hover:text-gray-400">Compétences</Link>
          <Link href="/contacts" className="hover:text-gray-400">Contact</Link>
        </nav>

        {/* Icônes Mode Sombre & Menu Mobile */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-xl">
            {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 flex flex-col space-y-4 text-center">
          <Link href="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link href="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>À propos</Link>
          <Link href="/projects" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Projets</Link>
          <Link href="/skills" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Compétences</Link>
          <Link href="/contacts" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};
