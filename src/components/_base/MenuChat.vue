<template>
    <nav class="navbar menu-chat px-3">
        <div class="img-container mr-2">
            <img v-if="data.imageUser == ''" src="../../assets/avatar.png" alt="Avatar">
            <img v-else :src="data.imageUser" alt="Profile">
        </div>
        <div class="row no-gutters mr-auto text-left">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">{{data.name}}</div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 status">{{ convert() }}</div>
        </div>
        <div class="navbar-nav">
            <ul class="navbar-nav bd-navbar-nav d-flex justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="#"><b-icon icon="grid"></b-icon></a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import moment from 'moment'
export default {
  name: 'MenuChat',
  data () {
    return {
      status: ''
    }
  },
  props: ['data'],
  methods: {
    convert () {
      if (this.data.status !== 'Online') {
        return 'Last seen ' + moment(this.data.status).fromNow()
      } else {
        return this.data.status
      }
    }
  }
}
</script>

<style scoped>
.menu-chat{
    width: 100%;
    height: 13vh;
    background: #FFFFFF;
    position: relative;
    box-shadow: inset 4px 0px 6px -6px rgba(219,219,219,0.86);
}
.img-container{
    width: 60px;
    height: 60px;
}
.img-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
.status {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 1px;
    color: #7E98DF;
}
</style>
