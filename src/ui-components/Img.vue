<template>
    <div class="flex">
        <div class="img">
            <img src="../../icon/bmw-2-logo-svg-vector.svg" alt="img is not defaint">
        </div>
        <div class="name">
            <p class="opacity-75">Author:</p>
            <p>{{ article }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Img',
    props: {
        article: {
            type: String,
            required: true
        }
    }
}
</script>
<style>
.flex .img {
    width: 200px;
    height: 200px;
}

.flex {
    display: flex;
    gap: 20px;
    align-items: center;
}

.img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
}
</style>