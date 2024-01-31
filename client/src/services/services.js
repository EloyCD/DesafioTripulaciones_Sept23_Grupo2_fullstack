import api from './api';

const authService = {
  getUser: async (Token, id) => {
    try {
      const response = await api.post(`/user/getUser/${id}`, { token: Token });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  login: async(Usuario, Contraseña) => {
    try {
      const response = await api.post(`/user/login`, { email: Usuario, password: Contraseña });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  loginToken: async(Token) => {
    try {
      const response = await api.post(`user/loginToken`, { token: Token});
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  logout: async(Token, email) => {
    try {
      const response = await api.post(`/user/logout`, { token: Token, email: email });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getPropuesta: async(id) => {
    try {
      const response = await api.get(`/propuesta/getPropuesta/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
};

export default authService;