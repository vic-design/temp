import Axios from 'axios';
import Config from '@/config';

const state = {
    config: Config
};

const getters = {
    CONFIG: state => {
        return state.config;
    },
};

const mutations = {
    SET_CONFIG: (state, payload) => {
        for (let key in payload) {
            state.config[key] = payload[key];
        }
    },
};

const actions = {
    GET_CONFIG: async(context, payload) => {
        let { data } = await Axios.get(payload.API + 'config?api_token=' + payload._token);
        context.commit('SET_CONFIG', data);
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}