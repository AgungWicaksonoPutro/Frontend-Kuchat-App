<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 chat-list">
      <div class="chat-content" v-for="(message, index) in data" :key="index">
        <div class="chatfromreceiver d-flex justify-content-start" v-if="message.idSender == id">
          <div class="img-container ml-3 mt-2">
                <img v-if="message.imageUser == ''" src="../../assets/avatar.png" alt="Avatar">
                <img v-else :src="message.imageUser" alt="Profile">
            </div>
            <div class="message">
              <div class="receiver ml-2 mt-2">
                {{message.chat}}
              </div>
              <div class="receiver-image ml-2 mt-2" v-if="message.imagechat">
                <div class="img-container-chat">
                  <img :src="message.imagechat" alt="imagechat">
                </div>
              </div>
          </div>
        </div>
        <div class="chatfromsender d-flex justify-content-end" v-if="message.idSender != id">
            <div class="message">
              <div class="sender mr-2 mt-2">
                {{message.chat}}
              </div>
              <div class="sender-image mr-2 mt-2" v-if="message.imagechat">
                <div class="img-container-chat">
                  <img :src="message.imagechat" alt="imagechat">
                </div>
              </div>
          </div>
            <div class="img-container mr-3 mt-2">
                <img v-if="message.imageUser == ''" src="../../assets/avatar.png" alt="Avatar">
                <img v-else :src="message.imageUser" alt="Profile">
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ChatList',
  props: ['data', 'id'],
  methods: {

  }
}
</script>

<style scoped>
.chat-list{
    height: 75vh;
    overflow: scroll;
}
.chat-list::-webkit-scrollbar {
  width: 0.2em;
  background: transparent;
}
.chat-list::-webkit-scrollbar-thumb {
  background: rgba(250, 250, 250, 0.308);
  border-radius: 10px;
}
.list-group-item{
  border: none;
  margin-bottom: 3px;
}
.img-container{
    width: 40px;
    height: 40px;
}
.img-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
.receiver{
  display: block;
  width: auto;
  height: auto;
  padding: 10px;
  min-width: 50px;
  min-height: 35px;
  max-width: 750px;
  background: #7E98DF;
  border-radius: 35px 35px 35px 10px;
}
.receiver-image{
  width: 100%;
  display: block;
}
.img-container-chat{
  display: block;
  width: 100px;
  height: 100px;
}
.img-container-chat img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sender{
  display: block;
  width: auto;
  height: auto;
  padding: 10px;
  min-width: 50px;
  min-height: 35px;
  max-width: 750px;
  background: #FFFFFF;
  border-radius: 35px 10px 35px 35px;
}
.sender-image{
  width: 100%;
  display: block;
}
.img-container-chat{
  display: block;
  width: 100px;
  height: 100px;
}
.img-container-chat img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
