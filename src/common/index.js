import axios from 'axios';
const REACT_APP_PINATA_PINNER_KEY = '020245f6e38724665777';
const REACT_APP_PINATA_PINNER_SECRET =
  'b09a3dd3637fa1a93b554659080b4ceae50e0dfd12c018ff82e6faaccf18748c';

axios.defaults.baseURL = 'https://api.pinata.cloud';
axios.defaults.headers.common['pinata_api_key'] = REACT_APP_PINATA_PINNER_KEY;
axios.defaults.headers.common['pinata_secret_api_key'] =
  REACT_APP_PINATA_PINNER_SECRET;

axios.defaults.headers.post['Content-Type'] = 'application/json';
