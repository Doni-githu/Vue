<template>
    <ul class="list-group">
        <li class="list-group-item list-group-item-danger" style="margin-top: 5px;" v-for="errorMessage in errorMessages" :key="errorMessage">
            {{ errorMessage }}
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        ValidationErr: {
            type: Object,
            required: true,
        },
    },
    computed: {
        errorMessages() {
            return Object.keys(this.ValidationErr).map(name => {
                const msg = this.ValidationErr[name].join(', ')
                return `${name} ${msg}`
            })
        }
    }
}
</script>
<style>

</style>