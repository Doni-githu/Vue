<template>
    <nav>
        <div class="navbar-conteiner">
            <template v-if="isLoggenIn">
                <RouterLink class="link" :to="{ name: 'home' }">{{ user.username }}</RouterLink>
                <a href="#" class="link" @click="logout">Logout</a>
            </template>
            <template v-if="isAnonymous">
                <RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink>
                <RouterLink class="link" :to="{ name: 'regist' }">Regist</RouterLink>
                <RouterLink class="link" :to="{ name: 'login' }">Login</RouterLink>
            </template>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from "vuex"
import { gettersTypes } from "../modules/types"
export default {
    computed: {
        ...mapGetters({
            user: gettersTypes.user,
            isLoggenIn: gettersTypes.isLoggedIn,
            isAnonymous: gettersTypes.isAnonymous
        }),
    },
    methods: {
        onHomeHandler() {
            return this.$router.push({ name: 'home' })
        },
        logout() {
            return this.$store.dispatch('logout')
        }
    }
}
</script>
<style scoped>
nav {
    width: 100%;
    height: 80px;
    margin-bottom: 1rem;
}

nav .navbar-conteiner {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    gap: 50px;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid gray;
}
</style>    