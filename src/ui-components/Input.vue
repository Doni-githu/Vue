<template>
    <div class="form-floating mt-3" style="margin-top: 1rem;">
        <input :type="type" class="form-control" id="floatingInput" :value="modelValue" @input="updateInput"
            :placeholder="label">
        <label for="floatingInput">{{ label }}</label>
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        type: String,
        label: String,
        modelValue: [String]
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
<style></style>