import { createSlice } from '@reduxjs/toolkit';

const PaymentSlice = createSlice({
   name: 'payment',
   initialState: {
      data: {},
      status: 'INIT',
   },
   reducers: {
      updatePayment: (state, action) => {
         state.data = action.payload;
         state.status = 'UPDATE';
      },
   },
});

export const { updatePayment } = PaymentSlice.actions;
export default PaymentSlice.reducer;
