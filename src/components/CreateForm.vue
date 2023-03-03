<template>
    <h1 class="text-center mb-5">Create Article</h1>
    <div class="w-50 mx-auto">
        <form @submit.prevent>
            <Input v-model="title" :type="'text'" :label="'Title'" />
            <TextArea v-model="description" :type="'text'" :label="'Description'" />
            <TextArea v-model="body" :type="'text'" :label="'Body'" />
            <Button @click="onSubmitForm">Create</Button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: '',
            description: '',
            body: ''
        }
    },
    methods: {
        onSubmitForm() {
            if (!this.title || !this.description || !this.body) return;
            const newArr = {
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: []
            }
            console.log(newArr);
        }
    }
}
</script>
<style></style>