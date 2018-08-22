import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
    count: 0
}

 const mutations = {//改变
    add(state){
        state.count++;
    }
}

export default new Vuex.Store({
    state,
    mutations
})