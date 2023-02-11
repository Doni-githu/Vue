<template>
    <h1>
        Article Detail
    </h1>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch('articlesDetail', this.$route.params.slug  )
    }
}
</script>
<style>

</style>