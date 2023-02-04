<template>
    <nav>
        <div class="navbar-conteiner">
            <RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink>
            <RouterLink class="link" :to="{ name: 'regist' }">Regist</RouterLink>
            <RouterLink class="link" :to="{ name: 'login' }">Login</RouterLink>
        </div>
    </nav>
</template>
<script>
export default {

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