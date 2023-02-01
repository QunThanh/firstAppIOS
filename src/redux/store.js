import { configureStore } from '@reduxjs/toolkit';

import categoryReduce from './CategorySlice';
import itemInHomeReduce from './ItemInHomeSlide';
import allArtReduce from './AllArtSlice';
import paymentReduce from './PaymentSlice';

export default configureStore({
   reducer: {
      category: categoryReduce,
      itemInHome: itemInHomeReduce,
      AllArt: allArtReduce,
      payment: paymentReduce,
   },
   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherAPI.middleware),
});
