import axios from '../../utils/axios';

const AuthService = {

  async login({ username, password }) {
    try {
      const response = await axios.post('/auth/login', {
        username,
        password
      });

      return response.data;
    } catch (e) {
      throw e;
    }
  },

  async register({ username, password }) {
    try {
      const response = await axios.post('/auth/register', {
        username,
        password
      });

      return response.data;
    } catch (e) {
      throw e;
    }
  },

  async getCurrentUserInfo() {
    try {
      const response = await axios.get('/users/me');
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}

export default AuthService;
