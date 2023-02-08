import { configureStore } from '@reduxjs/toolkit';

import categoryReduce from './CategorySlice';
import itemInHomeReduce from './ItemInHomeSlide';
import allArtReduce from './AllArtSlice';
import paymentReduce from './PaymentSlice';
import indexCategoryReduce from './IndexCategorySlice';
import myArtsReduce from './MyArtsSlice';

export default configureStore({
   reducer: {
      category: categoryReduce,
      itemInHome: itemInHomeReduce,
      AllArt: allArtReduce,
      payment: paymentReduce,
      indexCategory: indexCategoryReduce,
      myArts: myArtsReduce,
   },
   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherAPI.middleware),
});
