import axios from 'axios';
const instance = axios.create({
    baseURL: '',
    timeout: 10000,
    withCredentials: true
});
instance.interceptors.response.use(
  res => {
    const promise = new Promise((resolve, reject) => {
      if(res.status === 200) {
        resolve(res);
      } else {
        reject(res);
      }
    })
    return promise;
  }
);
export default instance;
