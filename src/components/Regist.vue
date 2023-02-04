<template>
    <div class="text-center">
        <main class="form-signin w-25 m-auto">
            <form>
                <img src="../../icon/bmw-2-logo-svg-vector.svg" style="width: 100px;">
                <h1 class="h3 mb-3 fw-normal">Regist</h1>
                <Input :type="'text'" :label="'Name'" />
                <Input :type="'email'" :label="'Email address'" />
                <Input :type="'password'" :label="'Password'" />
                <Button type="submit" @click="onChange" :disabled="isLoading">Regist</Button>
            </form>
        </main>
    </div>
</template>
<script>
export default {
    methods: {
        onChange(e) {
            e.preventDefault();
            this.$store.commit('setLoading')
        },
    },
    computed: {
        isLoading() {
            return this.$store.state.auth.isLoading
        }
    }
}
</script>
<style>

</style>