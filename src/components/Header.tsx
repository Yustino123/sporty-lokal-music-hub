
import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Music className="h-8 w-8" />
            <span>Sporty Lokal</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-yellow-200 transition-colors">
              Beranda
            </Link>
            <Link to="/search" className="hover:text-yellow-200 transition-colors">
              Cari Musik
            </Link>
            <Link to="/provinces" className="hover:text-yellow-200 transition-colors">
              Provinsi
            </Link>
            <Link to="/artists" className="hover:text-yellow-200 transition-colors">
              Musisi
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/search" className="md:hidden">
              <Search className="h-6 w-6" />
            </Link>
            <User className="h-6 w-6 cursor-pointer hover:text-yellow-200 transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
