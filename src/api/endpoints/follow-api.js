import instance from "../instance";

const followAPI = {
  subscribe(iserId) {
    const url = `follow/${iserId}`;
    return instance.post(url).then((response) => response.data);
    // return instance.post(url, {}).then((response) => response.data); // ИЛИ ТАК ?
  },
  unsubscribe(iserId) {
    const url = `follow/${iserId}`;
    return instance.delete(url).then((response) => response.data);
  },
};

export default followAPI;
