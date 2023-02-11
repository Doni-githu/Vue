<template>
    <div v-if="!article" class="center">
        <Loader />
    </div>
    <h1 v-else>
        {{ article.title }}
    </h1>
</template>
<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            article: state => state.articles.articlesDetail,
        })
    }
}
</script>
<style>
.center {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 120px;
    align-items: center;
}
</style>