import getCategory from './categorySevice';
import getItemHome from './itemHomeService';
import getAllArt from './allArtService';
import { postPayment, getAllPayment } from './allPaymentService';

export const baseURL = 'http://192.168.1.156:1880';

const services = {
   getCategory: () => getCategory(baseURL),
   getItemHome: () => getItemHome(baseURL),
   getAllArt: () => getAllArt(baseURL),
   getAllPayment: () => getAllPayment(baseURL),
   postPayment: (data) => postPayment(baseURL, data),
};

export default services;
