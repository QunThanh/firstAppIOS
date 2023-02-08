import { createSlice } from '@reduxjs/toolkit';

const indexCategorySlice = createSlice({
   name: 'IndexCategory',
   initialState: {
      status: 'INIT',
      data: { index: 0 },
   },
   reducers: {
      updateIndexCategory: (state, action) => {
         state.status = 'UPDATE';
         state.data = { index: action.payload };
      },
   },
});

export const { updateIndexCategory } = indexCategorySlice.actions;

export default indexCategorySlice.reducer;
