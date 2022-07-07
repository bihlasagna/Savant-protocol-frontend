import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  walletData: {
    address: '',
    balance: 0,
  },
};

const walletSlice = createSlice({
  name: 'walletInfo',
  initialState,
  reducers: {
    addWalletInfo(state, action) {
      const { payload } = action;
      state.walletData = { ...state.walletData, ...payload };
    },
  },
});

export const { addWalletInfo } = walletSlice.actions;

export default walletSlice.reducer;
