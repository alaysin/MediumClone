import axios from '@/api/axios';

const register = (credentials) => {
  return axios.post('/users', {user: credentials});
};

const getCurrentUser = () => {
  return axios.get('/user');
};

const updateCurrentUser = currentUserInput => {
    return axios
      .put('/user', {user: currentUserInput})
      .then(response => response.data.user)
  }

export default {
  register,
  getCurrentUser,
  updateCurrentUser,
};
