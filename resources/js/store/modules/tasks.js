import Axios from 'axios';

const state = {
    tasks: null
};

const getters = {
    TASKS: state => {
        return state.tasks;
    },
};

const mutations = {
    TASKS_SET: (state, payload) => {
        state.tasks = payload;
    },

    TASK_ADD: (state, payload) => {
        state.tasks.push(payload);
    },

    TASK_UPDATE: (state, payload) => {
        let taskId = state.tasks.findIndex((task => task.id = payload.id));
        state.tasks[taskId] = payload;
    }
};

const actions = {
    GET_TASKS: async(context, payload) => {
        let { data } = await Axios.get(payload.API + 'tasks');
        context.commit('TASKS_SET', data);
    },

    CREATE_TASK: async(context, payload) => {
        payload.form.api_token = payload.config._token;
        let data = await Axios.post(payload.config.API + 'tasks/new', payload.form)
            .then((response) => {
                context.commit('TASK_ADD', payload.form);
                return response;
            }).catch((error) => {
                return error.response;
            });
        return data;
    },

    SAVE_TASK: async(context, payload) => {
        payload.data.api_token = payload.config._token;

        let data = await Axios.post(payload.config.API + 'tasks/save', payload.data)
            .then((response) => {
                delete payload.data.api_token;
                context.commit('TASK_UPDATE', payload.data);
                return response;
            }).catch((error) => {
                return error.response;
            });
        return data;
    },
};

export default {
    state,
    getters,
    mutations,
    actions
};