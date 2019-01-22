function initialState() {
  return {
    valid: false,
    errorMessages: [],
  };
}

const register = {
  namespaced: true,
  state: {
    initialState: initialState,
    valid: initialState().valid,
    errorMessages: initialState().errorMessages,
    skippedFields: ['send_password']
  },
  getters: {
    isReady: state => {
      return state.valid;
    },
    errors: state => {
      return state.errorMessages;
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
    execute: ({ dispatch }, step) => {
      dispatch('steps/setStep', step, { root: true });
    },
    validate: ({ commit }, data) => {
      commit('VALIDATE_FORM', data);
    },
  },
};
export default register;
