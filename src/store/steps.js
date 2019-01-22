function initialState() {
  return {
    currentStep: 1
  };
}

const register = {
  namespaced: true,
  state: {
    initialState: initialState,
    currentStep: initialState().currentStep
  },
  getters: {
    currentStep: state => {
      return state.currentStep;
    }
  },
  mutations: {

  },
  actions: {
    setStep: ({ state }, step) => {
      state.currentStep = step;
    },
  },
};
export default register;
