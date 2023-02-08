import { createSlice } from '@reduxjs/toolkit';

const MyArtsSlice = createSlice({
   name: 'myArts',
   initialState: {
      status: 'INIT',
      data: {},
   },
   reducers: {
      updateMyArts: (state, action) => {
         state.status = 'UPDATE';
         state.data = action.payload;
      },
   },
});

export const { updateMyArts } = MyArtsSlice.actions;
export default MyArtsSlice.reducer;
