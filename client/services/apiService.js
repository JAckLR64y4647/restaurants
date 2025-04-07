const API_URL = 'https://api.example.com';

const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    if (!response.ok) {
      throw new Error('Ошибка при получении данных');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const apiService = {
  get: (endpoint) => fetchData(endpoint),
  post: (endpoint, data) => fetchData(endpoint, { method: 'POST', body: JSON.stringify(data) }),
  put: (endpoint, data) => fetchData(endpoint, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (endpoint) => fetchData(endpoint, { method: 'DELETE' }),
};

export default apiService;
