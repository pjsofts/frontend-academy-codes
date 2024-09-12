import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#0052CC] py-4 px-8 shadow-md">
      <nav>
        <ul className="flex justify-between items-center">
          <li className="text-xl font-semibold text-[#DEEBFF] mr-auto">Pouria Jahandideh</li>
          <li><Link to="/" className="text-[#DEEBFF] hover:bg-white/10 hover:text-white px-3 py-2 rounded transition-all duration-200">Projects</Link></li>
          <li><Link to="/about" className="text-[#DEEBFF] hover:bg-white/10 hover:text-white px-3 py-2 rounded transition-all duration-200">About</Link></li>
          <li><Link to="/contact" className="text-[#DEEBFF] hover:bg-white/10 hover:text-white px-3 py-2 rounded transition-all duration-200">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
