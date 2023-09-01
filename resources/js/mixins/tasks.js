export default {
    methods: {
        async getTasks() {
            return await this.$store.dispatch('GET_TASKS', this.config);
        }
    },
};