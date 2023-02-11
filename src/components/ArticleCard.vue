<template>
    <div class="col">
        <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
            </svg>
            <div class="card-body">
                <p class="card-title">{{ article.title }}</p>
                <p class="card-text">{{ article.body.slice(0, 150) }}</p>
                <div class="d-flex justify-content-between align-items-center card-footer">
                    <div class="btn-group">
                        <button type="button" @click="ArticleDetailHandler"
                            class="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                    <small class="text-muted">{{ new Date(article.createdAt).toLocaleString('us') }}</small>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    methods: {
        ArticleDetailHandler() {
            return this.$router.push(`/article/${this.article.slug}`)
        }
    }
}
</script>