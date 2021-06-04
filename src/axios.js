import axios from "axios";
const instance=axios.create({
   baseURL: 'http://jsonplaceholder.typicode.com'
});
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

instance.interceptors.request.use(request => {
   console.log(request);
   return request;
}, error => {
   console.error(error);
   return Promise.reject(error);
});
instance.interceptors.response.use(response => {
   console.log(response);
   return response;
}, error => {
   console.error(error);
   return Promise.reject(error);
});
export default instance;