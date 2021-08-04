import tagsApi from '@/api/tags';

const state = {
  data: null,
  isLoading: false,
  error: null,
};
export const mutationTypes = {
  getTagsStart: '[tags] Get tags start',
  getTagsSuccess: '[tags] Get tags success',
  getTagsFailure: '[tags] Get tags failure',
  getPopularTagsStart: '[popularTags] Get popular tags start',
  getPopularTagsSuccess: '[popularTags] Get popular tags success',
  getPopularTagsFailure: '[popularTags] Get popular tags failure',
};

export const actionTypes = {
  getTags: '[tags] Get tags',
  getPopularTags: '[popularTags] Get popular tags',
};

const mutations = {
  [mutationTypes.getTagsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getTagsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getTagsFailure](state) {
    state.isLoading = false;
  },
  [mutationTypes.getPopularTagsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getPopularTagsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getPopularTagsFailure](state) {
    state.isLoading = false;
  },
};

const actions = {
  [actionTypes.getTags](context, {apiUrlTags}) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getTagsStart, apiUrlTags);
      tagsApi
        .getTags(apiUrlTags)
        .then((response) => {
          context.commit(mutationTypes.getTagsSuccess, response.data);
          resolve(response.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getTagsFailure);
        });
    });
  },

  [actionTypes.getPopularTags](context) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getPopularTagsStart);
      tagsApi
        .getPopularTags()
        .then((tags) => {
          context.commit(mutationTypes.getPopularTagsSuccess, tags);
          resolve(tags);
        })
        .catch(() => {
          context.commit(mutationTypes.getPopularTagsFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
