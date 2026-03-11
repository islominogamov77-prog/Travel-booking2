import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchDestinationById } from '../services/api';

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchDestinationById(id);
        setDestination(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-gray-600">Loading destination…</p>
      </div>
    );
  }

  if (error || !destination) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Destination Not Found</h2>
        <button onClick={() => navigate('/')} className="btn-primary">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/')}
        className="mb-6 text-gray-600 hover:text-blue-600 flex items-center space-x-2 transition-colors duration-200"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to Destinations</span>
      </button>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative h-64 md:h-96">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
            }}
          />
        </div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-4xl font-bold text-gray-900">{destination.name}</h1>
            <span className="text-xl text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
              {destination.country}
            </span>
          </div>

          <div className="mb-6 text-3xl font-bold text-blue-600">
            ${destination.price}
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {destination.description}
            </p>
          </div>

          <div className="mt-8 flex space-x-4">
            <Link
              to={`/edit/${destination.id}`}
              className="btn-primary"
            >
              Edit Destination
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;