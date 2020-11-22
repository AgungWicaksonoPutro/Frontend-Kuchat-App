<template>
    <b-container fluid>
        <b-form class="bg-white px-3 py-2">
            <h4 class="text-center mb-4"><span><router-link to="/auth/login" class="nav-link"><b-icon class="fa-chevron-left" icon="chevron-left"></b-icon></router-link></span>Forgot Password</h4>
            <p class="text-left">You’ll get messages soon on your e-mail </p>
            <div class="form-group text-left">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <button type="submit" class="btn btn-primary mb-3">Send</button>
            </b-form>
    </b-container>
</template>

<script>
export default {
  name: 'FormForgotPassword'
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
</style>
