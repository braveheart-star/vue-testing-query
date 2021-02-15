import ApiService from '@/common/api.service';
import { GET_CHARTDATA } from '../types/actions.type';
import { SET_CHARTDATA } from '../types/mutations.type';

const state = {
  chartData: null,
  totalDeath: {},
};

const getters = {
  currentChartData(state) {
    return state.chartData;
  },
  currentTotalDeath(state) {
    return state.totalDeath;
  },
};

const actions = {
  [GET_CHARTDATA](context, slug) {
    ApiService.get(slug).then(({ data }) => {
      context.commit(SET_CHARTDATA, data.country.chat_data);
    });
  },
};

const mutations = {
  [SET_CHARTDATA](state, chart) {
    state.chartData = chart;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
