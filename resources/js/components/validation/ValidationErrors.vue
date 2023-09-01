<template>
    <div>
        <ul class="alert alert-danger">
            <li class="ml-3" v-for="(value, key) in validationErrors" :key="key">{{value}}</li>
        </ul>
    </div>
</template>

<script>
    export default {

        props: ['errors'],

        computed: {
            validationErrors() {
                let errors = Object.values(this.errors);
                return errors.flat();
            }
        }
    }
</script>
