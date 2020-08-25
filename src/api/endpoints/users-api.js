import instance from "../instance";

const usersAPI = {
  fetchUsers(page, count) {
    // console.log("getUsers page = ", page);
    const url = `users?page=${page}&count=${count}`;
    return instance.get(url).then((response) => response.data);
  },
};

export default usersAPI;
