import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  metadata: [],
};

const llcCreationReducer = createSlice({
  name: 'llcMeta',
  initialState,
  reducers: {
    addMetadata(state, action) {
      const { type, payload } = action;

      switch (type) {
        case 'LLC_CREATION':
          state.metadata.llc = payload;
          break;
        default:
          return state;
      }
    },
  },
});

export const { addMetadata } = llcCreationReducer.actions;

export default llcCreationReducer.reducer;
