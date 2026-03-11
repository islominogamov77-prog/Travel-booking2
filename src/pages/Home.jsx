import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import DestinationCard from '../components/DestinationCard';

import { Link } from 'react-router-dom';

const Home = ({ destinations, loading, searchTerm, favorites, onToggleFavorite }) => {
    const filtered = destinations.filter(d =>
        d.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const favoriteDestinations = destinations.filter(d => favorites.includes(d.id));

    if (loading) {
        return (
            <div className="text-center py-20">
                <p className="text-xl text-gray-600">Loading destinations…</p>
            </div>
        );
    }

    return (
        <div>
            {/* Hero Section */}
            <Hero />

            {/* Stats Section */}
            <Stats />

            {/* Features Section */}
            <Features />

            {/* Destinations Section */}
            <section id="destinations" className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Mashhur Sayohat Yo‘nalishlari</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Dunyo bo‘ylab ajoyib joylarni kashf eting va keyingi sarguzashtingizni rejalashtiring
                        </p>
                    </div>

                    {filtered.length === 0 ? (
                        <div className="text-center py-16">
                            <svg className="w-24 h-24 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Destinations Yet</h2>
                            <p className="text-gray-500 mb-6">Start by adding your first destination!</p>
                            <Link to="/add" className="btn-primary inline-block">Add Destination</Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filtered.map(destination => (
                                <DestinationCard
                                    key={destination.id}
                                    destination={destination}
                                    isFavorite={favorites.includes(destination.id)}
                                    onToggleFavorite={onToggleFavorite}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Favorites Section (only if user has favorites) */}
            {favoriteDestinations.length > 0 && (
                <section id="favorites" className="py-20 bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sevimli Joylarim</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {favoriteDestinations.map(dest => (
                                <DestinationCard
                                    key={dest.id}
                                    destination={dest}
                                    isFavorite={true}
                                    onToggleFavorite={onToggleFavorite}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Testimonials Section */}
            <Testimonials />

            {/* Newsletter Section */}
            <Newsletter />
        </div>
    );
};

export default Home;