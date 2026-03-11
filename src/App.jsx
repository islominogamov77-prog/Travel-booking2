import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AddDestination from './pages/AddDestination';
import EditDestination from './pages/EditDestination';
import DestinationDetails from './pages/DestinationDetails';
import {
  fetchDestinations,
  createDestination as apiCreateDestination,
  updateDestination as apiUpdateDestination,
} from './services/api';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // favorites are stored as an array of destination ids
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    // load list from local storage (formerly mockapi)
    const loadDestinations = async () => {
      try {
        const data = await fetchDestinations();
        setDestinations(data);
      } catch (err) {
        console.error('Failed to load destinations', err);
      } finally {
        setLoading(false);
      }
    };
    loadDestinations();
  }, []);

  const addDestination = async (newDestination) => {
    try {
      const created = await apiCreateDestination(newDestination);
      setDestinations(prev => [...prev, created]);
    } catch (err) {
      console.error('Error creating destination', err);
    }
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter(f => f !== id) : [...prev, id];
      return next;
    });
  };

  const updateDestination = async (id, updatedDestination) => {
    try {
      const updated = await apiUpdateDestination(id, updatedDestination);
      setDestinations(prev => prev.map(d => (d.id === id ? updated : d)));
    } catch (err) {
      console.error('Error updating destination', err);
    }
  };

  // persist favorites when they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);


  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={
            <Home
              destinations={destinations}
              loading={loading}
              searchTerm={searchTerm}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          } />
          <Route path="/add" element={
            <div className="container-custom py-8">
              <AddDestination onAdd={addDestination} />
            </div>
          } />
          <Route path="/edit/:id" element={
            <div className="container-custom py-8">
              <EditDestination
                onUpdate={updateDestination}
              />
            </div>
          } />
          <Route path="/destination/:id" element={
            <div className="container-custom py-8">
              <DestinationDetails />
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;