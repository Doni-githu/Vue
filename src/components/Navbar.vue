<template>
    <nav>
        <div class="navbar-conteiner">
            <template v-if="isLoggenIn">
                <RouterLink class="link" :to="{ name: 'home' }">{{ user.username }}</RouterLink>
            </template>
            <template v-if="!isLoggenIn">
                <RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink>
                <RouterLink class="link" :to="{ name: 'regist' }">Regist</RouterLink>
                <RouterLink class="link" :to="{ name: 'login' }">Login</RouterLink>
            </template>
        </div>
    </nav>
</template>
<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState({
            user: state => state.auth.user,
            isLoggenIn: state => state.auth.isLoggenIn,
        })
    },
    methods: {
        onHomeHandler() {
            return this.$router.push({ name: 'home' })
        }
    }
}
</script>
<style scoped>
nav {
    width: 100%;
    height: 80px;
}

nav .navbar-conteiner {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    gap: 50px;
    justify-content: flex-end;
    align-items: center;
}
</style>    