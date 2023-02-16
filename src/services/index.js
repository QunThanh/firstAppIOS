import getCategory from './categorySevice';
import getItemHome from './itemHomeService';
import getAllArt from './allArtService';
import getMyArts from './myArtsService';
import { postPayment, getAllPayment } from './allPaymentService';
import axios from 'axios';

export const baseURL = 'http://192.168.1.156:1880';

export const http = axios.create({
   baseURL: 'http://192.168.1.156:1880',
   timeout: 1000,
   headers: {'X-Custom-Header': 'foobar'}
 });

const services = {
   getCategory: () => getCategory(baseURL),
   getItemHome: () => getItemHome(baseURL),
   getAllArt:()=> getAllArt(baseURL),
   getAllPayment: () => getAllPayment(baseURL),
   getMyArts: () => getMyArts(baseURL),
   postPayment: (data) => postPayment(baseURL, data),
   getAllArtWithAxios : () => http.get('/getallitem').catch(err=>console.log('error request:',err.message)).then((res)=>res.data),
   userService: (data) => http.post('/user', data).catch(err=>console.log('error request:', err?.message)).then(res=>res.data),
};

export default services;
