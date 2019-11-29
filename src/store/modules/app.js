const state = {
  notFound: false
};

const getters = {
  notFound: (state) => state.notFound
};

const mutations = {
  SET_NOT_FOUND(state, status) {
    state.notFound = status;
  }
};

const module = {
  namespaced: true,
  state,
  getters,
  mutations
};

export default module;
