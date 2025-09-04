import axios from './instance';
import apiKeys from './apiKeys';

const getUrlByKey = (key) => apiKeys[key];

class API {
  static async apiGet(key, args) {
    const controller = new AbortController();
    const url =
      typeof args === 'string' ? getUrlByKey(key) + args : getUrlByKey(key);

    try {
      const response = await axios.get(url, {
        ...(typeof args !== 'string' && { params: args }),
        withCredentials: true,
        signal: controller.signal
      });
      return response.data; // normalize response
    } catch (error) {
      console.error('❌ API GET Error:', error.message);
      throw error.response?.data || error;
    }
  }
}

export default API;
