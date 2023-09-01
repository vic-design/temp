<template>
    <div class="row">

        <nav class="col-md-2 d-none d-md-block bg-dark sidebar">
            <main-menu/>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <router-view/>
        </main>

    </div>
</template>



<script>
    import MainMenu from './menu';

    export default {
        name: 'home',
        components: { MainMenu },
    }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
