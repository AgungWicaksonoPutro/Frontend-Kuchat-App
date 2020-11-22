<template>
    <nav class="navbar">
        <a href="#" class="navbar-brand">KuChat</a>
        <transition name="slide-fade">
          <button class="btn header--button" v-show="show" type="button" @click="show = !show">
              <b-icon icon="x"></b-icon>
          </button>
        </transition>
        <transition name="slide-fade">
          <button type="button" class="btn" v-show="!show" @click="show = true">
              <div class="col1"></div>
              <div class="col2"></div>
              <div class="col3"></div>
          </button>
        </transition>
         <transition name="dropdown">
             <div class="dropdown__menu" v-bind:class="{ active: show }" v-if="show">
              <ul class="dropdown__menu-nav">
                <li class="dropdown__menu-item">
                <router-link to="/profiles" class="router">
                  <a href="#" class="dropdown__menu-link" title="Settings">
                    <div class="dropdown__menu-svg">
                        <i class="fas fa-cog"></i>
                    </div>
                    <div class="dropdown__menu-text">Settings</div>
                  </a>
                </router-link>
                </li>
              </ul>
              <ul class="dropdown__menu-nav">
                <li class="dropdown__menu-item">
                  <a href="#" class="dropdown__menu-link" title="Contacts">
                    <div class="dropdown__menu-svg">
                        <i class="far fa-user"></i>
                    </div>
                    <div class="dropdown__menu-text">Contacts</div>
                  </a>
                </li>
              </ul>
              <ul class="dropdown__menu-nav">
                <li class="dropdown__menu-item">
                  <a href="#" class="dropdown__menu-link" title="Calls">
                    <div class="dropdown__menu-svg">
                        <i class="fas fa-phone"></i>
                    </div>
                    <div class="dropdown__menu-text">Calls</div>
                  </a>
                </li>
              </ul>
              <ul class="dropdown__menu-nav">
                <li class="dropdown__menu-item">
                  <a href="#" class="dropdown__menu-link" title="Save messages">
                    <div class="dropdown__menu-svg">
                        <i class="far fa-bookmark"></i>
                    </div>
                    <div class="dropdown__menu-text">Save messages</div>
                  </a>
                </li>
              </ul>
              <ul class="dropdown__menu-nav">
                <li class="dropdown__menu-item">
                  <a href="#" class="dropdown__menu-link" title="Telegram FAQ">
                    <div class="dropdown__menu-svg">
                        <i class="far fa-question-circle"></i>
                    </div>
                    <div class="dropdown__menu-text">Kuchat FAQ</div>
                  </a>
                </li>
              </ul>
              <ul class="dropdown__menu-nav">
                <li class="dropdown__menu-item">
                  <a href="#" class="dropdown__menu-link" title="Sign Out" @click="handleLogOut">
                    <div class="dropdown__menu-svg">
                        <i class="fas fa-power-off"></i>
                    </div>
                    <div class="dropdown__menu-text">Sign Out</div>
                  </a>
                </li>
              </ul>
             </div>
         </transition>
    </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Navbar',
  props: ['socket', 'getProfile'],
  data () {
    return {
      show: false
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['logOut']),
    handleLogOut () {
      this.logOut()
      this.socket.emit('logOut', { id: this.getProfile })
    }
  }
}
</script>

<style scoped>
nav{
    width: 100%;
    margin-left: 15px;
    margin-right: 25px;
}
.col1, .col3 {
    width: 22px;
    height: 3.3px;;
    background: #7E98DF;
    border-radius: 20px;
    margin: 5px;
}
.col2 {
    width: 15px;
    height: 3.3px;;
    background: #7E98DF;
    border-radius: 20px;
    margin: 5px;
}
.header--button {
    top: 12px;
    right: 17px;
    position: absolute;
    color: #7E98DF;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    font-size: 20px;
}
.btn{
    padding: 0;
}
.header--button:focus {
     outline: 0;
}
.dropdown__menu {
     top: 100%;
     right: 0.5rem;
     position: absolute;
     z-index: 10;
     height: auto;
     min-width: 300px;
     margin-top: 0.1rem;
     overflow-y: auto;
     padding: 1rem 1rem 1rem 0rem;
     background: #7E98DF;
     border-radius: 35px 10px 35px 35px;
}
.dropdown__menu-nav{
    list-style: none;
    margin: 0;
    padding: 0;
}
.dropdown__menu-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    color: #FFFFFF;
    padding: 0.3rem 0 0.3rem 1.5rem;
    margin-top: 0.1rem;
    margin-bottom: 0.2rem;
    border-radius: 0 50px 50px 0;
    font-size: 18px;
    letter-spacing: 0.05rem;
}
 .dropdown__menu-link:hover {
     color: #e2e2e2;
     background-color: rgba(79, 192, 141, 0.1);
}
 .dropdown__menu-svg {
     width: 1.5rem;
     height: 1.5rem;
}
 .dropdown__menu-text {
     font-weight: 300;
     margin-left: 1rem;
     margin-right: 1rem;
}
.dropdown__menu .slide-fade-enter-active, .slide-fade-leave-active {
     transition: all 0.6s;
}
.dropdown__menu .slide-fade-enter, .slide-fade-leave-active {
     opacity: 0;
}
.dropdown__menu .slide-fade-enter {
     transform: translateX(31px);
}
.dropdown__menu .slide-fade-leave-active {
     transform: translateX(-31px);
}
.dropdown-enter-active, .dropdown-leave-active {
     transition: all 1s;
}
.dropdown-enter, .dropdown-leave-to {
     opacity: 0;
     transform: translateY(30px);
}
 .main {
     margin: 6rem;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: center;
     flex-direction: column;
}
 .main__subtitle {
     color: #4f5959;
     font-weight: 100;
     margin-bottom: 2rem;
}
 .main__link {
     margin-right: 1.5rem;
     display: inline-block;
}
.main__link:last-child {
    margin-right: 0;
}
 .main__svg {
     width: 2rem;
     height: 2rem;
     opacity: 0.6;
     color: #94a2b0;
}
.main__svg:hover {
     color: #ffad1f;
}
.router{
    text-decoration: none;
}
</style>
