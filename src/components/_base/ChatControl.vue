<template>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 chat-control">
        <form class="mt-2">
            <div class="form-group d-flex justify-content-center">
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type your message...">
            <b-button variant="outline-primary">
                <b-icon icon="plus"></b-icon>
            </b-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'ChatControll'
}
</script>

<style scoped>
.chat-control{
    height: 12vh;
    background: #FFFFFF;
    position: relative;
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
.btn-outline-primary{
    border: 0;
    font-size: 28px;
    padding: 0;
    margin-left: 1rem;
}
.btn-outline-primary:hover{
    background: none;
    color: #7E98DF;
}
</style>
