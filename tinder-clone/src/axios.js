import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://project-tinder-clone.herokuapp.com',
})

export default instance;