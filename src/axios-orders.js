import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-40e0c.firebaseio.com/'
});

export default instance;