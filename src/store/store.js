import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isAct: false
    },
    mutations: {
        activateMenu(state) {
            state.isAct = !state.isAct
        }
    },
    actions: {
        activateMenu(context) {
            context.commit('activateMenu');
        }
    }
})

export default store;