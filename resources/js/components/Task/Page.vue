<template>
    <div>

        <div class="row">
            <h1 class="col-md-6 pr-0">Список задач <span v-if="tasks.length > 0">({{tasks.length}})</span></h1>
            <div class="col-md-6 my-1">
                <div class="row justify-content-end">
                    <button type="button" class="btn btn-success mr-2"
                            data-toggle="modal" data-target="#addTaskModal">+
                    </button>
                    <label class="sr-only mr-sm-2" for="taskSort">Сортировать по:</label>
                    <select class="custom-select mr-sm-3 col-sm-3 justify-content-end" id="taskSort"
                            @change="sortTasks($event.target.value)">
                        <option value="-1">Сортировать по:</option>
                        <option value="0">Приоритет</option>
                        <option value="1">Порядковый номер</option>
                        <option value="2">Выполнить до</option>
                        <option value="3">Создан</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="taskAddedSuccess">
            <strong>Задача добавлена!</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="taskAddedSuccess=false">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

        <div class="spinner-border text-danger" role="status" v-if="!tasks.length">
            <span class="sr-only">Loading...</span>
        </div>

        <task-list :tasks="tasks" v-if="tasks.length" @updateTask="updateTask"/>

        <task-add-form @addTask="addTask"/>

    </div>
</template>


<script>
    import TaskList from './List';
    import TaskAddForm from './AddForm';
    import TaskMethods from '@/mixins/tasks';

    export default {
        name: 'todo-page',

        data() {
            return {
                tasks: [],
                config: this.$store.getters.CONFIG,
                taskAddedSuccess: false,
                sortType: 0,
            }
        },

        components: { TaskList, TaskAddForm },

        mixins: [TaskMethods],

        beforeMount() {
            this.getTasks().then(() => this.refreshTasks());
        },

        methods: {

            addTask(data) {
                this.refreshTasks();
                this.taskAddedSuccess = true;
            },

            refreshTasks() {
                this.tasks = this.$store.getters.TASKS;
                this.sortTasks(this.sortType);
            },

            sortTasks(type = 0) {
                if (type == -1)
                    return;

                this.sortType = type;
                let order = this.config.taskSortTypes[type];
                this.tasks.sort((a, b) => {
                    if (a[order] > b[order]) {
                        return 1;
                    } else if (a[order] < b[order]) {
                        return -1;
                    }
                    return 0;
                });
            },

            updateTask(data) {
                this.$store.dispatch('SAVE_TASK', {
                    data: data, config: this.config
                }).then((response) => {
                    console.log(response);
                });
            }
        },
    }
</script>


<style scoped>
    .tasks {
        margin: auto;
    }
</style>
