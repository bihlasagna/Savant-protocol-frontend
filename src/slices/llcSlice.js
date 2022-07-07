import axios from 'axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.

axios.defaults.baseURL = 'https://api.pinata.cloud';
axios.defaults.headers.common['pinata_api_key'] = '020245f6e38724665777';
axios.defaults.headers.common['pinata_secret_api_key'] =
  'b09a3dd3637fa1a93b554659080b4ceae50e0dfd12c018ff82e6faaccf18748c';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const initialState = {
  loading: false,
  metadata: {
    llc: {},
  },
};

export const uploadMetadataToIPFS = createAsyncThunk(
  'llcMeta/uploadMetadataToIPFS',
  async (metadata, _) => {
    try {
      const { data } = await axios.post(
        '/pinning/pinJSONToIPFS',
        JSON.stringify(metadata),
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
);

const llcCreationReducer = createSlice({
  name: 'llcMeta',
  initialState,
  reducers: {
    addMetadata(state, action) {
      const { payload } = action;
      state.metadata.llc = payload;
    },
  },
  extraReducers: {
    [uploadMetadataToIPFS.pending]: (state) => {
      state.loading = true;
    },
    [uploadMetadataToIPFS.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
    },
    [uploadMetadataToIPFS.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { addMetadata } = llcCreationReducer.actions;

export default llcCreationReducer.reducer;
