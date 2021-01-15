import axios from 'axios'

export default {
    namespaced: true,
    state: {
        streetList: [],
    },

    mutations: {
        updateStreets(state, streetList) {
            state.streetList = streetList
        },
    },

    actions: {
        fetchStreets({commit}) {
            return new Promise((resolve, reject) => {
                // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt-token')
                axios
                    .get('http://127.0.0.1:4000/streets')
                    .then(response => {
                        commit('updateStreets', response.data)
                        resolve();
                    })
                    .catch(err => {
                        commit('updateStreets', [{id: 0, name: 'Пусто'}])
                        reject(err);
                    })
            })
        },

        addStreet({commit, getters, dispatch}, client) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://127.0.0.1:4000/streets/add', client)
                    .then(() => {
                        dispatch('fetchStreets')
                        reject()
                    })
                    .catch(err => reject("Can not add new street"))
            })
        }
    },

    getters: {
        STREETS(state) {
            return state.streetList
        },
    },
};
