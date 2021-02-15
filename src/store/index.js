import Vuex from 'vuex';
import Vue from 'vue';
import query from './modules/query.module';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: { query },
});
