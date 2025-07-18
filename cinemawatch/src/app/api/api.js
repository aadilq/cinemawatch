import axios from 'axios';

require('dotenv').config();



const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const api = axios.create({
    baseURL : BASE_URL, 
    params :{
        api: API_KEY,
        language: 'en-US'
    }
});

export{api, IMAGE_BASE_URL}
