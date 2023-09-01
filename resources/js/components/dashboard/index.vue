<template>
    <div>
        <h1 class="mb-4">Панель управления</h1>
        <div class="row justify-content-around">

            <div class="col-md-5 p-0">
                <dashboard-tasks/>
            </div>

            <div class="col-md-5 p-0">2</div>

        </div>
    </div>
</template>

<script>
import DashboardTasks from './elements/Tasks';

export default {
    name: 'dashboard',

    components: {
        DashboardTasks
    }
}
</script>

<style scoped>
    .col-md-5 div {
        min-height: 200px;
    }
</style>
