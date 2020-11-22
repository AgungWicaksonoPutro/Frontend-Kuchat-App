<template>
<div class="row no-gutters">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <b-form>
            <b-form-group>
                <div class="img-container">
                    <img v-if="getProfile.imageUser == ''" src="../../assets/avatar.png" alt="Avatar">
                    <img v-else :src="getProfile.imageUser" alt="Profile">
                </div>
                <label for="file" class="file">
                    <b-icon icon="camera"></b-icon>
                    <input type="file" @change="handleImage" name="name" id="name">
                </label>
            </b-form-group>
        </b-form>
    </div>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-2 name">
        <b-form>
            <b-form-group>
                <b-form-input v-model="name" class="form-name" type="text" @keyup.enter="handeleName" :placeholder="getProfile.name"></b-form-input>
                <b-form-input v-model="userName" class="form-userName" @keyup.enter="handeleUserName" type="text" :placeholder="getProfile.userName"></b-form-input>
            </b-form-group>
        </b-form>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProfileHeader',
  data () {
    return {
      name: '',
      userName: ''
    }
  },
  methods: {
    ...mapActions(['editUser', 'getUserById']),
    handleImage (e) {
      const data = new FormData()
      data.append('name', this.getProfile.name)
      data.append('userName', this.getProfile.userName)
      data.append('email', this.getProfile.email)
      data.append('bio', this.getProfile.bio)
      data.append('imageUser', e.target.files[0])
      const file = {
        id: this.userId,
        data: data
      }
      this.editUser(file)
        .then(res => {
          this.getUserById(this.userId)
        })
    },
    handeleName () {
      const data = new FormData()
      data.append('name', this.name)
      data.append('userName', this.getProfile.userName)
      data.append('email', this.getProfile.email)
      data.append('bio', this.getProfile.bio)
      data.append('imageUser', this.getProfile.imageUser)
      const file = {
        id: this.userId,
        data: data
      }
      this.editUser(file)
        .then(res => {
          this.getUserById(this.userId)
          this.name = ''
        })
    },
    handeleUserName () {
      const data = new FormData()
      data.append('name', this.getProfile.name)
      data.append('userName', this.userName)
      data.append('email', this.getProfile.email)
      data.append('bio', this.getProfile.bio)
      data.append('imageUser', this.getProfile.imageUser)
      const file = {
        id: this.userId,
        data: data
      }
      this.editUser(file)
        .then(res => {
          this.getUserById(this.userId)
          this.userName = ''
        })
    }
  },
  computed: {
    ...mapGetters(['getProfile', 'userId'])
  },
  mounted () {
    const id = this.userId
    this.getUserById(id)
  }
}
</script>

<style scoped>
.img-container{
    width: 80px;
    height: 80px;
    margin: auto;
    margin-top: 40px;
}
.img-container img{
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.name{
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
}
.userName{
    color: rgb(156, 156, 156);
}
.file {
    position: absolute;
    bottom: 8px;
    right: 175px;
    border-radius: 25%;
    padding: 0px 5px;
    background-color: rgba(212, 212, 212, 0.521);
}
.file [type=file]{
    cursor: inherit;
    display: block;
    filter: alpha(opacity=0);
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
}
.form-name{
    border: none;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.165px;
    color: #232323;
}
.form-userName{
    border: none;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 1.335px;
    color: #848484;
}
</style>
