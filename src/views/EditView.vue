<template>
    <h1 class="text-center mb-5">Edit Article</h1>
    <ArticleForm v-if="article" :initialValue="initialValue" :editHandler="editHandler" />
</template>
<script>
import { mapState } from 'vuex';
import ArticleForm from '../components/ArticleForm.vue';
export default {
    computed: {
        ...mapState({
            article: state => state.articles.articlesDetail
        }),
        initialValue() {
            return {
                title: this.article.title,
                description: this.article.description,
                body: this.article.body
            }
        }
    },
    methods: {
        editHandler(article) {
            this.$store
                .dispatch('updatehandeler', { article: article, slug: this.$route.params.slug })
                .then(() => this.$router.push('/'))
        }
    },
    mounted() {
        this.$store.dispatch("articlesDetail", this.$route.params.slug);
    },
    components: {
        ArticleForm
    }
}
</script>
<style></style>