<template>
    <div class="conteiner">
        <Navbar />
        <RouterView />
    </div>
</template>
<script>
import { RouterView, RouterLink } from "vue-router"
import Navbar from "./components/Navbar.vue"
export default {
    components: {
        Navbar
    }
}
</script>
<style>
.conteiner {
    width: 80%;
    margin: 0 auto;
}


.link {
    text-decoration: none;
    color: #000;
}
</style>