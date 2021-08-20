import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: ''
    },
    actions: {
        getUserInfo({ commit }) {
            return axios.get('http://10.26.129.17:8080/api/getUserInfo').then((res) => {
                commit('setUserInfo', res.data)
            })
        }
    },
    mutations: {
        setUserInfo(state, data) {
            state.userInfo = data
        }
    }
})
export default store