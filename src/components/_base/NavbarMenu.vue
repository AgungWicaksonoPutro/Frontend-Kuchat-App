<template>
<nav class="navbar pt-2 sticky-top bg-white">
        <transition name="slide-fade">
            <button class="btn header--button" type="button">
            <router-link to="/chat" class="router"><b-icon class="fa-chevron-left" icon="chevron-left"></b-icon></router-link>
            </button>
        </transition>
        <a href="#" class="navbar-brand">{{getProfile.userName}}</a>
</nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NavbarMenu',
  computed: {
    ...mapGetters(['getProfile'])
  }
}
</script>

<style scoped>
nav{
    width: 100%;
}
.header--button {
    left: 17px;
    position: absolute;
    color: #7E98DF;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    font-size: 20px;
}
.navbar-brand{
    margin: auto;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>
