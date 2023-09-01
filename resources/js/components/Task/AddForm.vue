<template>
    <div class="modal fade" id="addTaskModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Добавить задачу</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <validation-errors :errors="validErrors" v-if="validErrors"/>

                    <form>
                        <div class="form-group">
                            <label for="title" class="col-form-label">Задача:</label>
                            <input type="text" class="form-control" id="title" name="title" v-model.trim="form.title">
                            <span></span>
                        </div>
                        <div class="form-group">
                            <label for="description" class="col-form-label">Описание:</label>
                            <textarea class="form-control" id="description" name="description"
                                      v-model.trim="form.description"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="priority" class="col-form-label">Приоритет:</label>
                            <select name="priority" id="priority" class="custom-select" v-model="form.priority">
                                <option value="-1" disabled>Задать</option>
                                <option v-for="priority in config.task.priority" v-bind:key="priority">{{priority}}
                                </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="until" class="col-form-label">Сделать до:</label>
                            <datepicker :disabledDates="disabledDates" v-model="form.until"></datepicker>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Закрыть</button>
                    <button type="button" class="btn btn-primary" @click="addTask">Добавить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import ValidationErrors from '../validation/ValidationErrors';

    export default {

        name: "task-add-form",

        components: {
            Datepicker, ValidationErrors
        },

        data() {
            return {
                config: this.$store.getters.CONFIG,
                form: {
                    title: '',
                    description: '',
                    priority: -1,
                    until: new Date(),
                    created_at: new Date(),
                },
                disabledDates: {
                    to: new Date()
                },
                validErrors: null,
            };
        },

        methods: {
            addTask() {
                this.$store.dispatch('CREATE_TASK', {
                    form: this.form, config: this.config
                }).then((response) => {
                    if(response.status == 422) {
                        this.validErrors = response.data.errors;
                    } else {
                        $('#addTaskModal').modal('hide');
                        this.validErrors = null;
                        this.$emit('addTask');
                    }
                });
            },

            closeModal() {
                this.validErrors = null;
            }
        },
    }
</script>
