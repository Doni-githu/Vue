<template>
    <ul class="list-group">
        <li class="list-group-item list-group-item-danger" v-for="errorMessage in errorMessages" :key="errorMessage">{{ errorMessage }}</li>
    </ul>
</template>
<script>
export default {
    props: {
        ValudetionErrors: {
            type: Object,
            required: true,
        },
    },
    computed: {
        errorMessages() {
            return Object.keys(this.ValudetionErrors).map(name => {
                const msg = this.ValudetionErrors[name].join(', ')
                return `${name} ${msg}`
            })
        }
    }
}
</script>
<style>

</style>