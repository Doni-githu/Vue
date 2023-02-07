<template>
    <div class="text-center">
        <main class="form-signin w-25 m-auto">
            <form>
                <h1 class="h3 mb-3 fw-normal">Regist</h1>

                <ValidationError v-if="validationErrors" :ValidationErr="validationErrors" />

                <Input :type="'text'" :label="'Name'" v-model="username" />
                <Input :type="'email'" :label="'Email address'" v-model="email" />
                <Input :type="'password'" :label="'Password'" v-model="password" />
                <Button type="submit" @click="onChange" :disabled="isLoading">Regist</Button>
            </form>
        </main>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import ValidationError from './ValidationError.vue';
export default {
    data() {
        return {
            username: "",
            email: "",
            password: ""
        };
    },
    methods: {
        onChange(e) {
            e.preventDefault();
            const data = {
                username: this.username,
                email: this.email,
                password: this.password
            };
            this.$store.dispatch("register", data).then(user => {
                this.$router.push({ name: 'home' })
                console.log("User", user);
            }).catch(err => {
                console.log("err", err);
            });
        },
    },
    computed: {
        // ...mapState({
        //     isLoading: state => state.auth.isLoading,
        //     validationErrors: state => state.auth.errors, 
        // }),
        isLoading(){
            return this.$store.state.auth.isLoading
        },
        validationErrors(){
            return this.$store.state.auth.errors
        }
    },

    components: {
        ValidationError
    }
}
</script>
<style>

</style>