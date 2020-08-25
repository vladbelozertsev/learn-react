import instance from "../instance";

const authAPI = {
  async aboutMe() {
    const response = await instance.get("auth/me");
    return response.data;
  },
  async login({ email, password, rememberMe }) {
    const response = await instance.post("auth/login", { email, password, rememberMe });
    return response.data;
  },
  async logout() {
    const response = await instance.delete("auth/login");
    return response.data;
  },
};

export default authAPI;
