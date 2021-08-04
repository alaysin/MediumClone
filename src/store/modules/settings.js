import {mutationTypes as authMutatuinTypes} from '@/store/modules/auth';
const state = {
  isSubmitting: false,
  validationErrors: null,
};

const mutations = {
  [authMutatuinTypes.updateCurrentUserStart](state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  [authMutatuinTypes.updateCurrentUserSuccess](state) {
    state.isSubmitting = false;
  },
  [authMutatuinTypes.updateCurrentUserFailure](state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  },
};

export default {
  state,
  mutations,
};
