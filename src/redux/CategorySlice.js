import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
   name: 'category',
   initialState: {
      data: {},
      status: 'INIT',
   },
   reducers: {
      updateCategory: (state, action) => {
         state.data = action.payload;
         state.status = 'UPDATE';
      },
   },
});

export const { updateCategory } = categorySlice.actions;

export default categorySlice.reducer;
