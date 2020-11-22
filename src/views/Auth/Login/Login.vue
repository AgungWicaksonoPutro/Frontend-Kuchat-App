<template>
    <b-container fluid>
        <b-form class="bg-white px-3 py-2">
            <h4>Login</h4>
            <p class="text-left">Hi, Welcome back!</p>
            <b-form-group class="form-group text-left">
                <label for="email">Email address</label>
                <b-form-input
                type="email"
                id="email"
                v-model="$v.form.email.$model"
                :state="validateEmail('email')"
                class="form-control">
                </b-form-input>
                <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group class="form-group InputPassword1 text-left">
                <label for="password">Password</label>
                <b-form-input
                v-model="$v.form.password.$model"
                :state="validatePassword ('password')"
                :type="type"
                id="password"
                class="form-control pwd"
                >
                </b-form-input>
                <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
                <b-button class="show-password" @click="showPassword">
                    <b-icon v-if="type == 'password'" icon="eye-fill"></b-icon>
                    <b-icon v-if="type != 'password'" icon="eye-slash-fill"></b-icon>
                </b-button>
                <div class="form-group text-right">
                    <router-link to="/auth/forgot-password" class="nav-link">Forgot Password ?</router-link>
                </div>
                <button type="submit" class="btn btn-primary mb-3" @click="handleLogin">Login</button>
                <div class="form-group break row d-flex align-items-center">
                    <div class="col"><hr></div>
                    <div class="col">Login with</div>
                    <div class="col"><hr></div>
                </div>
                <button type="submit" class="btn btn btn-light mb-3"><i class="fab fa-google"></i> Google</button>
                <p>Don’t have an account?<span><router-link to="/auth/register" class="router"> Sign Up </router-link></span></p>
            </b-form-group>
        </b-form>
    </b-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { mapActions } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  name: 'Login',
  data () {
    return {
      type: 'password',
      form: {
        email: null,
        password: null
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
    handleLogin (e) {
      e.preventDefault()
      const data = {
        email: this.form.email,
        password: this.form.password
      }
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      this.login(data)
        .then(() => {
          this.$router.push('/chat')
        })
    },
    ...mapActions(['login']),
    validateEmail (email) {
      const { $dirty, $error } = this.$v.form[email]
      return $dirty ? !$error : null
    },
    validatePassword (password) {
      const { $dirty, $error } = this.$v.form[password]
      return $dirty ? !$error : null
    }
  }
}
</script>

<style scoped>
form {
    width: 33%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 20px 20px rgba(117, 117, 117, 0.05);
    border-radius: 30px;
    font-size: 14px;
}
h4 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 1px;
    color: #7E98DF;
}
label{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    line-height: 17px;
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
    border: 0;
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
.router{
    text-decoration: none;
}
.pwd.is-valid, .was-validated .form-control:valid{
  background-image: none;
}
.pwd.is-invalid, .was-validated .form-control:invalid{
  background-image: none;
}
</style>
