import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  metadata: {
    llc: {},
  },
};

const llcCreationReducer = createSlice({
  name: 'llcMeta',
  initialState,
  reducers: {
    addMetadata(state, action) {
      const { payload } = action;
      state.metadata.llc = payload;
    },
  },
});

export const { addMetadata } = llcCreationReducer.actions;

export default llcCreationReducer.reducer;
