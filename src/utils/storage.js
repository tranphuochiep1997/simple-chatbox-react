const Storage = {
  getAccessToken() {
    return localStorage.getItem('accessToken');
  },

  setAccessToken(accessToken) {
    localStorage.setItem('accessToken', accessToken);
  },

  deleteAccessToken() {
    localStorage.removeItem('accessToken');
  },

  clear() {
    localStorage.clear();
  }
}

export default Storage;
