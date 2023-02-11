<template>
    <div class="conteiner">
        <Navbar />
            
    </div>
</template>
<script>
import { RouterView } from "vue-router"
import Navbar from "./components/Navbar.vue"
export default {
    components: {
        Navbar
    },
    mounted() {
        this.$store.dispatch('getUser')
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