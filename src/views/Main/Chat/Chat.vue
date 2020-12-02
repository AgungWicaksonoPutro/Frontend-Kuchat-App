<template>
<b-container fluid>
    <div class="row no-gutters">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 bg-white">
            <div class="row no gutters">
                <Navbar
                :socket="socket"
                :getProfile="userId"/>
            </div>
            <div class="row no gutters">
                <ChatControl/>
            </div>
            <div class="row no gutters">
                <NavbarScroll/>
            </div>
            <div class="row no gutters">
                <ContactList
                :contact="getContactChat"
                :id="userId"
                @select-contact="AddContact"
                />
            </div>
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
</b-container>
</template>

<script>
import io from 'socket.io-client'
import Navbar from '../../../components/_base/Navbar'
import ChatList from '../../../components/_base/ChatList'
import ChatControl from '../../../components/_base/ChatControl'
import NavbarScroll from '../../../components/_base/NavbarScroll'
import MenuChat from '../../../components/_base/MenuChat'
import MessageControl from '../../../components/_base/MessageControl'
import ContactList from '../../../components/_base/ContactList'
import ChatListNull from '../../../components/_base/ChatListNull'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Home',
  components: {
    Navbar,
    ChatControl,
    NavbarScroll,
    MenuChat,
    ChatList,
    MessageControl,
    ContactList,
    ChatListNull
  },
  data () {
    return {
      socket: io('http://localhost:3400'),
      idReceiver: 0,
      idContact: 0,
      Single: true,
      imageProfile: null
    }
  },
  methods: {
    ...mapActions(['getUserById', 'getChatById', 'getMessage', 'getContactById', 'getContactProfiles', 'getAllContact', 'getProfileById']),
    ...mapMutations(['addChat', 'newChat', 'setStatus', 'setfriendList', 'setIdContact', 'setFriendContact', 'setIdContactOnChat']),
    sendMessage (data) {
      this.socket.emit('sendMessage', { chat: data, idSender: this.userId, idContact: this.idContact, idReceiver: this.idReceiver, createAt: new Date(), imageUser: this.imageProfile }, cb => {
        this.addChat(cb)
      })
    },
    AddContact (id) {
      this.idReceiver = id.idFriends
      this.idContact = id.id
      const url = `?id=${id.id}&sort=ASC`
      this.getMessage(url)
      this.getContactProfiles(id.idFriends)
    }
  },
  computed: {
    ...mapGetters(['userId', 'getProfile', 'getMsg', 'getFriendList', 'getProfileContact', 'getAllContactList', 'getContactChat', 'friendContact'])
  },
  mounted () {
    this.socket.emit('UserLogin', { id: this.userId })
    const id = this.userId
    this.setIdContact(id)
    this.setIdContactOnChat(id)
    this.getUserById(id)
    this.socket.on('receiveMessage', data => {
      this.newChat(data)
    })
    this.getAllContact()
    for (let i = 0; i < this.getAllContactList.length; i++) {
      this.getContactById(this.getAllContactList[i].id)
      this.getChatById(this.getAllContactList[i].idFriend)
    }
    this.imageProfile = this.getProfile.imageUser
  }
}
</script>

<style scoped>
.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
    width: 100%;
    padding-right: 0;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
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
</style>
