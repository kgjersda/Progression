import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './mutations'
import subscribers from './subscribers'

Vue.use(Vuex)

export default new Vuex.Store({
    state, 
    mutations,
    subscribers
})