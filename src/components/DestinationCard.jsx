import { Link } from 'react-router-dom';

const DestinationCard = ({ destination, isFavorite = false, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
          }}
        />
        {onToggleFavorite && (
          <button
            onClick={() => onToggleFavorite(destination.id)}
            className="absolute top-2 right-2 p-2 bg-white bg-opacity-75 rounded-full text-gray-600 hover:text-red-600 transition-colors duration-200"
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? (
              <svg
                className="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5 18.58 5 20 6.42 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.637l1.318-1.319a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                />
              </svg>
            )}
          </button>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
          <span className="text-sm text-gray-600">{destination.country}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>

        <p className="text-lg font-bold text-blue-600 mb-4">${destination.price}</p>

        <div className="flex justify-between items-center">
          <Link
            to={`/destination/${destination.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            More Info →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;