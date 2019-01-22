function initialState() {
  return {
    userTags: [],
  };
}

const register = {
  namespaced: true,
  state: {
    initialState: initialState,
    userTags: initialState().userTags,
  },
  getters: {
    getTags: state => {
      return state.userTags;
    },
  },
  mutations: {
    'VALIDATE_FORM'(state, data) {
      state.errorMessages = [];
      Object.keys(data).forEach((key, i) => {
        if (data[ key ] === null && state.skippedFields.indexOf(key) === -1) {
          state.errorMessages.push({
            key: key,
            value: key + ' is missing',
          });
        }
      });
      state.valid = state.errorMessages.length === 0;
    },
  },
  actions: {
    addToUser: ({ state }, tag) => {
      if(state.userTags.indexOf(tag) === -1) {
        state.userTags.push(tag);
      }
    },
  },
};
export default register;
