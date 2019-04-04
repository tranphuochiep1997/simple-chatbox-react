import axios from '../../utils/axios';

const ChatService = {

  async getListMessages() {
    try {
      const response = await axios.get('/messages');

      return response.data;
    } catch (e) {
      throw e;
    }
  }
}

export default ChatService;
