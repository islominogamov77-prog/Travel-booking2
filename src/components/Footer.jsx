import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xl font-bold text-white">TravelTour</span>
                        </Link>
                        <p className="text-sm text-gray-400">
                            Ajoyib joylarni kashf qilish va unutilmas sayohat xotiralarini yaratish uchun sizning mukammal manzilingiz.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-blue-400 transition-colors">Bosh sahifa</Link></li>
                            <li><a href="#features" className="hover:text-blue-400 transition-colors">Xususiyatlar</a></li>
                            <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Sharhlar</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>📧 info@traveltour.com</li>
                            <li>📱 +998 (33)526-67-77</li>
                            <li>📍 Sebzor, 4a xonadon</li>
                            <li className="mt-4">
                                <div className="flex space-x-4">
                                    <a href="#" className="text-blue-400 hover:text-blue-300">Facebook</a>
                                    <a href="#" className="text-blue-400 hover:text-blue-300">Twitter</a>
                                    <a href="#" className="text-blue-400 hover:text-blue-300">Instagram</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                    <p>&copy;2026 TravelTour. Barcha huquqlar himoyalangan. | Sayohatchilar uchun ❤️ bilan yaratilgan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
