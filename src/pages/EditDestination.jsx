import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DestinationForm from '../components/DestinationForm';
import { fetchDestinationById } from '../services/api';

const EditDestination = ({ onUpdate }) => {
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
        <p className="text-xl text-gray-600">Loading...</p>
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

  const handleSubmit = async (formData) => {
    await onUpdate(id, formData);
    navigate('/');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Edit Destination</h1>
      <DestinationForm
        initialData={destination}
        onSubmit={handleSubmit}
        buttonText="Update Destination"
      />
    </div>
  );
};

export default EditDestination;