<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ContactList">
        <div class="card mx-3 my-2 p-2" v-for="(contact) in contact" :key="contact.id" @click="handleAddContact({id: contact.id, idFriends: contact.idFriend})">
            <div class="row no-gutters">
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                    <div class="img-container">
                        <img v-if="contact.imageUser == ''" src="../../assets/avatar.png" alt="Avatar">
                        <img v-else :src="contact.imageUser" alt="Profile">
                    </div>
                </div>
                <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                    <div class="row no-gutters">
                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 text-left">{{contact.name}}</div>
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-left">time</div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 text-left">hello</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { } from 'vuex'
export default {
  name: 'ContactList',
  props: ['contact'],
  methods: {
    handleAddContact (id) {
      this.$emit('select-contact', id)
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
</style>
