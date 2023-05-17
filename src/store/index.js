import { createStore } from 'vuex';

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      userInfo: {}, //用户信息
    };
  },
  mutations: {
    updateUserInfo(state, variational) {
      state.userInfo = variational;
    },
  },
});

export default store;
