<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ContactList">
        <div class="card mx-3 my-2 p-2" v-for="(contact) in contact" :key="contact.id" @click="handleAddContact({id: contact.id, idFriends: contact.idFriend, imageUser: contact.imageUser})">
            <div class="row no-gutters">
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                    <div class="img-container">
                        <img v-if="contact.imageUser == ''" src="../../assets/avatar.png" alt="Avatar">
                        <img v-else :src="contact.imageUser" alt="Profile">
                    </div>
                </div>
                <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                    <div class="row no-gutters">
                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 text-left name">{{contact.name}}</div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-left time">{{convert (contact.createAt)}}</div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 text-left chat">{{contact.chat}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ContactList',
  props: ['contact'],
  methods: {
    handleAddContact (id) {
      this.$emit('select-contact', id)
    },
    convert (a) {
      return moment(a).format('LT')
    }
  }
}
</script>

<style scoped>
.img-container{
    width: 50px;
    height: 50px;
    margin: auto;
}
.img-container img{
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.card{
    border: none;
    cursor: pointer;
}
.time{
    font-size: 14px;
}
.name{
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.165px;
    color: #232323;
    margin-bottom: 5px;
}
.chat{
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: -0.165px;
    color: #7E98DF;
}
</style>
