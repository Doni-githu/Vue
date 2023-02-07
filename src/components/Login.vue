<template>
    <div class="text-center">
        <main class="form-signin w-25 m-auto">
            <form @submit.prevent>
                <h1 class="h3 mb-3 fw-normal">Login</h1>

                <ValidationError v-if="ValidationErrors" :ValudetionErrors="ValidationErrors" />

                <Input :type="'email'" :label="'Email address'" v-model="email" />
                <Input :type="'password'" :label="'Password'" v-model="password" />
                <Button type="submit" @click="onChange" :disabled="isLoading">Login</Button>
            </form>
        </main>
    </div>
</template>
<script>
import { mapState } from "vuex"
import ValidationError from './ValidationError.vue';
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        onChange() {
            const data = {
                email: this.email,
                password: this.password
            };
            this.$store.dispatch("login", data)
                .then(user => {
                    this.$router.push({ name: 'home' })
                    console.log("User", user);
                })
                .catch(err => console.log("ERROR", err));
        },
    },
    computed: {
        ...mapState({
            isLoading: state => state.auth.isLoading,
            ValidationErrors: state => state.auth.errors,
        })
    },
    components: {
        ValidationError
    }
}
</script>
<style>

</style>