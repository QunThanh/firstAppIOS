import { createSlice } from '@reduxjs/toolkit';

const PaymentFormSlice = createSlice({
   name: 'paymentForm',
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

export const { updatePayment } = PaymentFormSlice.actions;
export default PaymentFormSlice.reducer;
