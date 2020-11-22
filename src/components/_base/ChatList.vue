<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 chat-list">
      <b-list-group v-for="(message, index) in data" :key="index">
        <b-list-group-item v-show="message.idReceiver" variant="info">{{message.chat}}</b-list-group-item>
        <b-list-group-item v-show="message.idSender" variant="danger">{{message.chat}}</b-list-group-item>
      </b-list-group>
    </div>
</template>

<script>
export default {
  name: 'ChatList',
  props: ['data'],
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
</style>
