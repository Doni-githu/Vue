<template>
    <h1 class="text-center mb-5">Create Article</h1>
    <div class="w-50 mx-auto">
        <form @submit.prevent>
            <Input v-model="title" :type="'text'" :label="'Title'" />
            <TextArea v-model="description" :type="'text'" :label="'Description'" />
            <TextArea v-model="body" :type="'text'" :label="'Body'" />
            <Button @click="onSubmitForm" :disabled="isLoading">Create</Button>
        </form>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            title: '',
            description: '',
            body: ''
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.contol.isLoading
        })
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
            this.$store.dispatch('createArticle', newArr)
            this.$router.push({ name: 'home' })
        }
    }
}
</script>
<style></style>