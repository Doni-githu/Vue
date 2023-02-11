<template>
    <div v-if="!article" class="center">
        <Loader />
    </div>
    <div v-else class="row">
        <div class="col-12">
            <p class="fs-2">{{ article.title }}</p>
        </div>
        <div class="col-6 mt-3">
            <p class="opacity-75">Description: </p>
            <p class="font-monospace">{{ article.description }} </p>
        </div>
        <div class="col-3 mt-3">
            <p class="opacity-75">Created at:</p>
            <p class="font-monospace">{{ new Date(article.createdAt).toLocaleString('us') }} </p>
        </div>
        <div class="col-2 mt-3">
            <p class="opacity-75">Updated at:</p>
            <p class="font-monospace">{{ new Date(article.updatedAt).toLocaleString('us') }} </p>
        </div>
        <div class="col-4 mt-3">
            <Img :article="article.author.username" />
        </div>
        <div class="col-8 mt-3">
            <p class="opacity-75">Body:</p>
            <p class="font-monospace">{{ article.body }}</p>
        </div>
    </div>
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