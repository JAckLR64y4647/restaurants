import apiService from './apiService';

const bookingService = {
  createBooking: async (userId, restaurantId, date, time, tableId) => {
    try {
      const response = await apiService.post('bookings', {
        userId,
        restaurantId,
        date,
        time,
        tableId,
      });
      return response;
    } catch (error) {
      throw new Error('Ошибка при создании бронирования');
    }
  },

  getUserBookings: async (userId) => {
    try {
      const response = await apiService.get(`bookings/user/${userId}`);
      return response;
    } catch (error) {
      throw new Error('Ошибка при получении списка бронирований');
    }
  },

  cancelBooking: async (bookingId) => {
    try {
      const response = await apiService.delete(`bookings/${bookingId}`);
      return response;
    } catch (error) {
      throw new Error('Ошибка при отмене бронирования');
    }
  },
};

export default bookingService;
