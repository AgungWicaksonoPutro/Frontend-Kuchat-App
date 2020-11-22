<template>
    <b-container fluid>
            <b-form class="bg-white px-3 py-3">
                <h4 class="text-center mb-4"><span><router-link to="/auth/login" class="nav-link"><b-icon class="fa-chevron-left" icon="chevron-left"></b-icon></router-link></span>Register</h4>
                <p class="text-left">Let’s create your account!</p>
                <b-form-group class="form-group text-left">
                    <label for="exampleInputText1">Name</label>
                    <b-form-input type="text"
                        v-model="$v.form.name.$model"
                        class="form-control"
                        id="exampleInputText1"
                        aria-describedby="textHelp"
                        :state="validateName('name')"></b-form-input>
                    <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="form-group text-left">
                    <label for="exampleInputEmail1">Email address</label>
                    <b-form-input type="email"
                        v-model="$v.form.email.$model"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        :state="validateEmail('email')"></b-form-input>
                    <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="form-group InputPassword1 text-left">
                    <label for="exampleInputPassword1">Password</label>
                    <b-form-input :type="type"
                        v-model="$v.form.password.$model"
                        class="form-control pwd"
                        :state="validatePassword ('password')"
                        id="exampleInputPassword1"></b-form-input>
                    <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
                    <b-button class="show-password" @click="showPassword">
                        <b-icon v-if="type == 'password'" icon="eye-fill"></b-icon>
                        <b-icon v-if="type != 'password'" icon="eye-slash-fill"></b-icon>
                    </b-button>
                </b-form-group>
                <button type="submit" class="btn btn-primary mb-3" @click="handleRegister">Register</button>
                <div class="form-group break row d-flex align-items-center">
                    <div class="col"><hr></div>
                    <div class="col">Register with</div>
                    <div class="col"><hr></div>
                </div>
                <button type="submit" class="btn btn btn-light mb-3"><i class="fab fa-google"></i> Google</button>
            </b-form>
    </b-container>
</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'Register',
  data () {
    return {
      type: 'password',
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
        minLength: minLength(3)
      },
      password: {
        required
      },
      name: {
        required,
        minLength: minLength(2)
      }
    }
  },
  methods: {
    showPassword () {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    },
    handleRegister (e) {
      e.preventDefault()
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      this.register(data)
        .then(() => {
          this.$router.push('/login')
        })
    },
    ...mapActions(['register']),
    validateEmail (email) {
      const { $dirty, $error } = this.$v.form[email]
      return $dirty ? !$error : null
    },
    validatePassword (password) {
      const { $dirty, $error } = this.$v.form[password]
      return $dirty ? !$error : null
    },
    validateName (name) {
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    }
  }
}
</script>

<style scoped>
.row {
    background: #E5E5E5;
}
form {
    width: 33%;
    position: fixed;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    box-shadow: 0px 20px 20px rgba(117, 117, 117, 0.05);
    border-radius: 30px;
    font-size: 14px;
}
h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    letter-spacing: 1px;
    color: #7E98DF;
    position: relative;
}
.fa-chevron-left{
    position: absolute;
    top: 0;
    left: 0;
}
label{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    line-height: 17px;
    /* identical to box height */
    color: #848484;
    opacity: 0.75;
}
.form-control {
    border: none;
    border-bottom: 1px solid #232323;
    border-radius: 0;
    position: relative;
}
.btn-primary{
    width: 100%;
    background: #7E98DF;
    border-radius: 70px;
}
.break{
    background: transparent;
    color: #848484;
}
.btn-light{
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #7E98DF;
    box-sizing: border-box;
    border-radius: 70px;
    color: #7E98DF;
}
.InputPassword1{
    position: relative;
}
.show-password{
    background-color: transparent;
    color: black;
    border: none;
    outline: none;
    position: absolute;
    top: 30px;
    right: 0px;
}
.pwd.is-valid, .was-validated .form-control:valid{
  background-image: none;
}
.pwd.is-invalid, .was-validated .form-control:invalid{
  background-image: none;
}
</style>
