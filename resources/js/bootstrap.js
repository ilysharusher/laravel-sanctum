import axios from 'axios';
import router from "./router";

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

window.axios.interceptors.response.use((res) => res, error => {
    if (error.response.status === 401 || error.response.status === 419) {
        localStorage.removeItem('isAuth');

        router.push({name: 'login'});
    }
});