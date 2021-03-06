import Vue from 'vue'
import Vuex from 'vuex'
import security from './module/security';
import sport from './module/sport';
import exercise from './module/exercise';
import routines from './module/routines';
import routinesCycle from './module/routinesCycle';
import cyclesExercises from "./module/cyclesExercises";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    security,
    sport,
    exercise,
    routines,
    routinesCycle,
    cyclesExercises
  }
})

