<template>
    <div class="w-50 mx-auto">
        <form @submit.prevent>
            <Input v-model="title2" :label="'Title'" />
            <TextArea v-model="description2" :type="'text'" :label="'Description'" />
            <TextArea v-model="body2" :type="'text'" :label="'Body'" />
            <Button @click="editArticle" :disabled="isLoading">Edit</Button>
        </form>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            title2: this.initialValue.title,
            description2: this.initialValue.description,
            body2: this.initialValue.body
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.contol.isLoading
        })
    },
    props: {
        initialValue: {
            type: Object,
            required: true
        },
        editHandler: {
            type: Function,
            required: true
        }
    },
    methods: {
        editArticle() {
            const article = {
                title: this.title2,
                description: this.description2,
                body: this.body2
            }
            this.editHandler(article)
        }
    },
}
</script>