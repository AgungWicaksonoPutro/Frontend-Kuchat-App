<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 chat-control">
        <b-form class="mt-1" v-on:submit.prevent>
            <b-form-group class="form-group">
                <b-form-input type="text"
                class="form-control"
                v-model="message"
                placeholder="Type your message..."
                @keyup.enter="handleSend"></b-form-input>
                <b-button class="btn plus" type="button"><i class="fas fa-plus"></i></b-button>
                <b-button class="btn smile" type="button"><i class="fas fa-smile"></i></b-button>
                <b-button class="btn camera" type="button"><i class="fas fa-camera"></i></b-button>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
export default {
  name: 'MessageControl',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    handleSend () {
      this.$emit('send-message', this.message)
      this.message = ''
    }
  }
}
</script>

<style scoped>
.chat-control{
    height: 12vh;
    background: #FFFFFF;
    position: relative;
    box-shadow: inset 4px 0px 6px -6px rgba(219,219,219,0.86);
}
form{
    width: 100%;
    padding: 5px 15px 0 15px;
}
.form-control{
    background: #FAFAFA;
    border-radius: 15px;
    border: 0;
}
.plus{
    background-color: transparent;
    border: transparent;
    position: absolute;
    top: 7px;
    right: 90px;
    color: #7E98DF;
    border-radius: 20px;
}
.smile{
    background-color: transparent;
    border: transparent;
    position: absolute;
    top: 7px;
    right: 55px;
    color: #7E98DF;
    border-radius: 20px;
}
.camera{
    background-color: transparent;
    border: transparent;
    position: absolute;
    top: 7px;
    right: 20px;
    color: #7E98DF;
    border-radius: 20px;
}
</style>
