import { createSlice } from '@reduxjs/toolkit';

const AllArtSlice = createSlice({
   name: 'allArt',
   initialState: {
      data: {},
      status: 'INIT',
   },
   reducers: {
      updateAllArt: (state, action) => {
         state.data = action.payload;
         state.status = 'UPDATE';
      },
   },
});

export const { updateAllArt } = AllArtSlice.actions;
export default AllArtSlice.reducer;
