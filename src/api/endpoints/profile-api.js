import instance from "../instance";

const profileAPI = {
  async getProfile(userId) {
    try {
      const response = await instance.get(`profile/${userId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  async getStatus(userId) {
    try {
      const response = await instance.get(`profile/status/${userId}`);
      return response.data;
    } catch (error) {
      // return error.response - возвращает объект, на который в дальнейшем НЕ детектится
      // выражение response instanceof Error, см profile-reducer. Поэтому возвращаем error:
      return error;
    }
  },
  async setStatus(status) {
    const response = await instance.put(`profile/status`, { status });
    return response.data;
  },
};

export default profileAPI;
