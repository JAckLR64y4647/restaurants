import apiService from './apiService';

const restaurantService = {
  getAllRestaurants: async () => {
    try {
      const response = await apiService.get('restaurants');
      return response;
    } catch (error) {
      throw new Error('Ошибка при получении списка ресторанов');
    }
  },

  getRestaurantDetails: async (id) => {
    try {
      const response = await apiService.get(`restaurants/${id}`);
      return response;
    } catch (error) {
      throw new Error('Ошибка при получении данных ресторана');
    }
  },

  getRestaurantTables: async (restaurantId) => {
    try {
      const response = await apiService.get(`restaurants/${restaurantId}/tables`);
      return response;
    } catch (error) {
      throw new Error('Ошибка при получении информации о столах');
    }
  },
};

export default restaurantService;
