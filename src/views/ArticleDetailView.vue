<template>
    <ArticleDetail />
</template>
<script>
import ArticleDetail from '../components/ArticleDetail.vue';

export default {
    mounted() {
        this.$store.dispatch("articlesDetail", this.$route.params.slug);
    },
    components: {
        ArticleDetail
    }
}
</script>
<style>

</style>