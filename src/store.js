import Vue from 'vue';
import Vuex from 'vuex';
import register from './store/register';
import steps from './store/steps';
import tags from './store/tags';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    register,
    tags,
    steps
  },
  actions: {
    setStep({commit}, step) {

    },
  },
});
