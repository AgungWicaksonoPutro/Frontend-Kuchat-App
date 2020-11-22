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
                :contact="getFriendList"
                @select-contact="AddContact"
                />
            </div>
        </div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 content">
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
    ContactList
  },
  data () {
    return {
      socket: io('http://localhost:3400'),
      idReceiver: 0,
      idContact: 0,
      Single: true
    }
  },
  methods: {
    ...mapActions(['getUserById', 'getChatById', 'getMessage', 'getContactById', 'getContactProfiles']),
    ...mapMutations(['addChat', 'newChat', 'setStatus']),
    sendMessage (data) {
      this.socket.emit('sendMessage', { chat: data, idSender: this.userId, idContact: this.idContact, idReceiver: this.idReceiver, createAt: new Date() }, cb => {
        this.addChat(cb)
      })
    },
    AddContact (id) {
      this.idReceiver = id.idFriends
      this.idContact = id.id
      const url = `?id=${id.id}`
      this.getMessage(url)
      this.getContactProfiles(id.idFriends)
    }
  },
  computed: {
    ...mapGetters(['userId', 'getProfile', 'getMsg', 'getFriendList', 'getProfileContact'])
  },
  mounted () {
    this.socket.emit('UserLogin', { id: this.userId })
    const id = this.userId
    this.getUserById(id)
    this.getContactById(id)
    this.socket.on('receiveMessage', data => {
      console.log(data)
      this.newChat(data)
    })
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
</style>
