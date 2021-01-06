import Vue from 'vue'
import Vuex from 'vuex'
import clients from "@/store/modules/clients";
import streets from "@/store/modules/streets";
import tarifs from "@/store/modules/tarifs";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        clients, streets, tarifs
    }
})
