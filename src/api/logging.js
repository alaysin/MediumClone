import axios from '@/api/axios';

const logging = (credentials) => {
  return axios.post('/users/login', {user: credentials});
};
const getCurretnUser = () => {
  return axios.get('/user');
};

export default {
  logging,
  getCurretnUser,
};
