<template>
    <div class="row no-gutters">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 bg-white navigasi">
            <div class="row no-gutters sticky-top">
                <NavbarMenu/>
            </div>
                <ProfileHeader/>
            <div class="row no-gutters text-left mt-5">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h5 class="ml-4">Account</h5>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="email ml-4">{{getProfile.name}}</div>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
                    <div class="userName ml-4">{{getProfile.userName}}</div>
                    <div class="label ml-4">Username</div>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
                    <div class="bio ml-4 mr-2">
                    <b-form>
                        <b-form-group>
                            <b-form-textarea no-resize v-model="bio" class="form-bio" type="text" @keyup.enter="handeleBio" :placeholder="getProfile.bio"></b-form-textarea>
                        </b-form-group>
                    </b-form></div>
                    <div class="label ml-4">Bio</div>
                </div>
            </div>
            <h5 class="ml-4 text-left mt-2">Location</h5>
            <CardMap/>
        </div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 content">
          <div class="row no-gutters" v-if="idReceiver == 0">
            <ChatListNull/>
          </div>
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 available" v-else>
            <div class="row no-gutters">
              <MenuChat
              :data="getProfileContact"/>
            </div>
            <div class="row no-gutters">
              <ChatList
              :data="getMsg"
              :id="userId"
              :idReceiv="idReceiver"/>
            </div>
            <div class="row no-gutters">
              <MessageControl @send-message="sendMessage"/>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import NavbarMenu from '../../../components/_base/NavbarMenu'
import ProfileHeader from '../../../components/_base/ProfileHeader'
import ChatList from '../../../components/_base/ChatList'
import CardMap from '../../../components/_base/CardMap'
import MenuChat from '../../../components/_base/MenuChat'
import MessageControl from '../../../components/_base/MessageControl'
import ChatListNull from '../../../components/_base/ChatListNull'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Profile',
  data () {
    return {
      bio: '',
      idReceiver: 0
    }
  },
  components: {
    NavbarMenu,
    ProfileHeader,
    ChatList,
    CardMap,
    MenuChat,
    MessageControl,
    ChatListNull
  },
  methods: {
    ...mapActions(['getUserById', 'editUser']),
    handeleBio () {
      const data = new FormData()
      data.append('name', this.getProfile.name)
      data.append('userName', this.getProfile.userName)
      data.append('email', this.getProfile.email)
      data.append('bio', this.bio)
      data.append('imageUser', this.getProfile.imageUser)
      const file = {
        id: this.userId,
        data: data
      }
      this.editUser(file)
        .then(res => {
          this.getUserById(this.userId)
        })
    }
  },
  computed: {
    ...mapGetters(['getProfile', 'userId', 'getProfileContact', 'getMsg'])
  }
}
</script>

<style scoped>
.content{
  height: 100vh;
  box-shadow: inset 4px 0px 6px -6px rgba(219,219,219,0.86);
  position: relative;
  background-color: #FAFAFA;
}
.available{
    padding-right: 0;
    padding-left: 0;
}
.account{
    margin: 7px;
}
h5{
    font-size: 18px;
    letter-spacing: 1px;
}
.userName{
    font-weight: 500;
    font-size: 16px;
}
.form-bio{
    font-weight: 500;
    font-size: 16px;
    border: none;
    text-align: left;
    padding: 0;
}
.label{
    color: rgb(189, 189, 189);
}
.navigasi{
    height: 100vh;
    overflow: scroll;
}
.navigasi::-webkit-scrollbar {
  width: 0.7em;
  background: transparent;
}
.navigasi::-webkit-scrollbar-thumb {
  background: rgba(250, 250, 250, 0.308);
  border-radius: 10px;
}
.chat-control{
    height: 12vh;
    background: #FFFFFF;
    position: relative;
    box-shadow: inset 4px 0px 6px -6px rgba(219,219,219,0.86);
}
</style>
