<template>

        <div class="card">
            <h4 class="card-header"><router-link to='/task' >Задачи</router-link></h4>
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="spinner-border text-danger" role="status" v-if="!tasks.length">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <table class="table table-bordered" v-if="tasks.length">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col" v-for="(state, index) in states" :key="index">{{ state }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center" v-for="(state, index) in states" :key="index">{{ taskQuantity(index) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

</template>

<script>
import TaskMethods from '@/mixins/tasks';

export default {

    name: "dashboard-tasks",

    mixins: [ TaskMethods ],

    data() {
        return {
            tasks: [],
            config: this.$store.getters.CONFIG,
        }
    },

    beforeMount() {
        this.getTasks().then(() => this.tasks = this.$store.getters.TASKS);
    },

    computed: {
        states() {
            return this.config.task.status;
        },
    },

    methods: {
        taskQuantity(state) {
            return this.tasks.filter((item) => {
                return item.status == state;
            }).length;
        }
    },
}
</script>
