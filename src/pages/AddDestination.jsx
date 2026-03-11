import { useNavigate } from 'react-router-dom';
import DestinationForm from '../components/DestinationForm';

const AddDestination = ({ onAdd }) => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    await onAdd(formData);
    navigate('/');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Add New Destination</h1>
      <DestinationForm onSubmit={handleSubmit} buttonText="Add Destination" />
    </div>
  );
};

export default AddDestination;