import Vue from 'vue';
import Vuex from 'vuex';
import tasks from './modules/tasks';
import config from './modules/config';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        tasks,
        config
    }
});