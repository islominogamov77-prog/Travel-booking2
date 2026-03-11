// API service communicating with the MockAPI backend
// All functions return the parsed JSON response (or void for delete).

const BASE_URL = 'https://6918854821a963594870535f.mockapi.io/destinations';

// helper that checks for HTTP errors
async function handleResponse(res) {
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API request failed: ${res.status} ${res.statusText} - ${errorText}`);
  }
  return res.json();
}

export const fetchDestinations = async () => {
  const res = await fetch(BASE_URL);
  return handleResponse(res);
};

export const fetchDestinationById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return handleResponse(res);
};

export const createDestination = async (data) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

export const updateDestination = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

export const deleteDestination = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  // MockAPI returns an empty object, but we don't need to parse it.
  if (!res.ok) {
    throw new Error(`Failed to delete destination with id ${id}`);
  }
};