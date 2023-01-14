import axios from 'axios';
const instance = axios.create({baseURL: 'https://mera-social-media-api.onrender.com'});
export default instance