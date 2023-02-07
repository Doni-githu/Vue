<template>
    <div class="text-center">
        <main class="form-signin w-25 m-auto">
            <form @submit.prevent>
                <img src="../../icon/bmw-2-logo-svg-vector.svg" style="width: 100px;">
                <h1 class="h3 mb-3 fw-normal">Regist</h1>
                <Input :type="'email'" :label="'Email address'" v-model="name" />
                <Input :type="'password'" :label="'Password'" v-model="password" />
                <Button type="submit">Login</Button>
            </form>
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            password: '',
        }
    },
}
</script>
<style>

</style>