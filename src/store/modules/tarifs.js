import axios from 'axios'

export default {
    namespaced: true,
    state: {
        tarifList: [],
    },

    mutations: {
        updateTarifs(state, tarifList) {
            state.tarifList = tarifList
        },
    },

    actions: {
        fetchTarifs({commit}) {
            return new Promise((resolve, reject) => {
                // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt-token')
                axios
                    .get('http://127.0.0.1:4000/tarifs')
                    .then(response => {
                        commit('updateTarifs', response.data)
                        resolve();
                    })
                    .catch(err => {
                        commit('updateTarifs', [{id: 0, name: 'Пусто'}])
                        reject(err);
                    })
            })
        },

        addTarifs({commit, getters, dispatch}, client) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://127.0.0.1:4000/tarifs/add', client)
                    .then(() => {
                        dispatch('fetchTarifs')
                        reject()
                    })
                    .catch(err => reject("Can not add new tarif"))
            })
        }
    },

    getters: {
        TARIFS(state) {
            return state.tarifList
        },
    },
};
