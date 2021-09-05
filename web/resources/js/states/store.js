import Vue from 'vue'
import Vuex from 'vuex'
import states from './states'
import actions from './actions'
import mutations from './mutators'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: states,
    getters: getters,
    mutations: mutations,
    actions: actions
});
