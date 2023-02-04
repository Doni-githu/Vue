<template>
    <div class="form-floating" style="margin-top: 1rem;">
        <input :type="type" class="form-control" id="floatingInput" :placeholder="label">
        <label for="floatingInput">{{ label }}</label>
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        type: String,
        label: String,
    }
}
</script>
<style>

</style>