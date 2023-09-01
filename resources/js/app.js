/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => {
//     Vue.component(key.split('/').pop().split('.')[0], files(key).default);
// });

// Vue.component('Home', require('./components/Home.vue').default);
// import Home from './components/Home.vue';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home'
import config from './config';
import { store } from './store';

Vue.config.productionTip = false;
Vue.use(VueRouter);

import { routes } from './routes';
const router = new VueRouter({ routes });

config._token = $('input[name="_token"]').val();

const app = new Vue({
    store,
    router,
    components: { Home },

    created() {
        this.$store.dispatch('GET_CONFIG', config).then(() => {
            this.$mount(document.getElementById('app'));
        });
    },
});