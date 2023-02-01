import { createSlice } from '@reduxjs/toolkit';

const ItemInHomeSlide = createSlice({
   name: 'itemInHome',
   initialState: {
      data: {},
      status: 'INIT',
   },
   reducers: {
      updateItemInHome: (state, action) => {
         state.data = action.payload;
         state.status = 'UPDATE';
      },
   },
});

export const { updateItemInHome } = ItemInHomeSlide.actions;
export default ItemInHomeSlide.reducer;
