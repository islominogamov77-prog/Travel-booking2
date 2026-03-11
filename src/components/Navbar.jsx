import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ searchTerm, onSearchChange }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => {
        return location.pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600';
    };

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container-custom">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xl font-bold text-gray-900">TravelTour</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className={`${isActive('/')} transition-colors duration-200 font-medium`}>
                            Asosiy sahifa
                        </Link>
                        <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                            Manzillar
                        </a>
                        <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                            Xususiyatlar
                        </a>
                        {/* search box */}
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={e => onSearchChange(e.target.value)}
                            placeholder="Search…"
                            className="ml-4 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4 border-t space-y-2">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={e => onSearchChange(e.target.value)}
                            placeholder="Search…"
                            className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                            Home
                        </Link>
                        <a href="#destinations" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                            Destinations
                        </a>
                        <a href="#features" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                            Features
                        </a>

                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;