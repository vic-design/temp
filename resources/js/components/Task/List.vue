<template>
    <div>
        <div class="card mb-3" v-for="task in tasks" :key="task.id">
            <h5 class="card-header">#{{task.id}} {{task.title}}</h5>
            <div class="card-body">
                <p class="card-text">Статус: {{ config.task.status[task.status] }}</p>
                <p class="card-text">Создано: {{ task.created_at | dateFormated }}</p>
                <p class="card-text">Срок до: {{ task.until | dateFormated }}</p>
                <p class="card-text description">{{ task.description }}</p>
            </div>
            <div class="card-footer" >
                <!--v-show="task.status != 4"-->
                <button type="button" class="btn btn-danger float-right" @click="closeTask(task.id)">Закрыть</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Filters from '@/mixins/filters';

    export default {

        mixins: [Filters],

        name: 'task-list',

        data() {
            return {
                config: this.$store.getters.CONFIG,
            };
        },

        props: ['tasks'],

        methods: {
            closeTask(id) {
                if (!id)
                    return;
                let task = this.tasks.filter((item) => {
                    return item.id == id;
                })[0];
                task.status = 4;
                task.completed_at = new Date();
                this.$emit('updateTask', task);
            },
        }
    }
</script>

<style scoped>
    .description {
        white-space: pre-wrap;
    }
</style>
