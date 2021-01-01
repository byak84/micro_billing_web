import axios from 'axios'

export default {
    namespaced: true,
    state: {
        clientList: [],
    },

    mutations: {
        updateClients(state, clientList) {
            state.clientList = clientList;
        },
    },

    actions: {
        fetchClients({commit}) {
            return new Promise((resolve, reject) => {
                // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt-token')
                axios
                    .get('http://127.0.0.1:4000/clients')
                    .then(response => {
                        commit('updateClients', response.data)
                        resolve();
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
        },

        addClient({commit, getters, dispatch}, client) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://127.0.0.1:4000/clients/add', client)
                    .then(() => {
                        dispatch('fetchClients')
                        reject()
                    })
                    .catch(err => reject("Can not add new client"))
            })
        }
    },

    getters: {
        CLIENTS(state) {
            return state.clientList
        },
    },
};
