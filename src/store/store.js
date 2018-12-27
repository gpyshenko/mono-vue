import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isAct: false,
        resolution: {
            mobile: null
        }
    },
    mutations: {
        activateMenu(state) {
            state.isAct = !state.isAct
        },
        setResolution(state,res) {
            state.resolution.mobile = res
        }
    },
    actions: {
        activateMenu(context) {
            context.commit('activateMenu');
        },
        setResolution(context, res) {
            context.commit('setResolution', res)
        }
    }
})

export default store;