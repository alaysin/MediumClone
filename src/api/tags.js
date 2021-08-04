import axios from '@/api/axios';

const getTags = (apiUrlTags) => {
  return axios.get(apiUrlTags);
};

const getPopularTags = () => {
  return axios.get('/tags').then((response) => response.data.tags);
};

export default {
  getTags,
  getPopularTags,
};
