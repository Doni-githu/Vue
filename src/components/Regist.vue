<template>
    <div class="text-center">
        <main class="form-signin w-25 m-auto">
            <form>
                <img src="../../icon/bmw-2-logo-svg-vector.svg" style="width: 100px;">
                <h1 class="h3 mb-3 fw-normal">Regist</h1>

                <ValidationError />

                <Input :type="'text'" :label="'Name'" v-model="username" />
                <Input :type="'email'" :label="'Email address'" v-model="email" />
                <Input :type="'password'" :label="'Password'" v-model="password" />
                <Button type="submit" @click="onChange" :disabled="isLoading">Regist</Button>
            </form>
        </main>
    </div>
</template>
<script>
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
                console.log("User", user);
            }).catch(err => console.log("ERROR", err));
        },
    },
    computed: {
        isLoading() {
            return this.$store.state.auth.isLoading;
        }
    },
    components: {
        ValidationError
    }
}
</script>
<style>

</style>