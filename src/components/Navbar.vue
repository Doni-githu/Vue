<template>
    <nav>
        <div class="navbar-conteiner">
            <div class="left">
                <img @click="onHomeHandler" src="../../icon/bmw-2-logo-svg-vector.svg">
            </div>
            <div class="right">
                <template v-if="isLoggenIn">
                    <RouterLink class="link" :to="{ name: 'create-article' }">Create Article</RouterLink>
                    <RouterLink class="link" :to="{ name: 'home' }">{{ user.username }}</RouterLink>
                    <a href="#" class="link" @click="logout">Logout</a>
                </template>
                <template v-if="!isLoggenIn">
                    <RouterLink class="link" :to="{ name: 'regist' }">Regist</RouterLink>
                    <RouterLink class="link" :to="{ name: 'login' }">Login</RouterLink>
                </template>
            </div>
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

.navbar-conteiner {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid gray;
    align-items: center;
    display: flex;
    justify-content: space-between;
}

.right {
    display: flex;
    gap: 50px;
    align-items: center;
}

.left img {
    width: 120px;
    height: 47px;
    object-fit: contain;
    object-position: left;
}
</style>    