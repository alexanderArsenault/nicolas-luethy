import api from "@/api";

const state = {
  accessToken: "",
  refreshToken: "",
  expiryTime: ""
};

const getters = {
  getAccessToken: (state) => state.accessToken,
  getRefreshToken: (state) => state.refreshToken,
  getExpiryTime: (state) => state.expiryTime
};

const mutations = {
  SET_ACCESS_TOKEN(state, token) {
    state.accessToken = token;
  },

  SET_REFRESH_TOKEN(state, token) {
    state.refreshToken = token;
  },

  SET_EXPIRY_TIME(state, time) {
    state.expiryTime = time;
  }
};

const module = {
  namespaced: true,
  state,
  getters,
  mutations,
};

export default module;
