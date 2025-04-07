import apiService from './apiService';

const authService = {
  login: async (username, password) => {
    try {
      const response = await apiService.post('auth/login', { username, password });
      return response;
    } catch (error) {
      throw new Error('Ошибка при входе');
    }
  },

  register: async (username, password, email) => {
    try {
      const response = await apiService.post('auth/register', { username, password, email });
      return response;
    } catch (error) {
      throw new Error('Ошибка при регистрации');
    }
  },

  logout: async () => {
    try {
      await apiService.post('auth/logout');
    } catch (error) {
      throw new Error('Ошибка при выходе');
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await apiService.get('auth/me');
      return response;
    } catch (error) {
      throw new Error('Ошибка при получении данных пользователя');
    }
  },
};

export default authService;
