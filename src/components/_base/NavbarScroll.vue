<template>
<nav class="navbar navbar-expand flex-column flex-lg-row bd-navbar px-4">
    <div class="navbar-nav-scroll">
        <ul class="navbar-nav bd-navbar-nav d-flex justify-content-center">
            <li class="nav-item">
                <a class="nav-link" href="#">All</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Important</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Unread</a>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
  name: 'NavbarScroll'
}
</script>

<style scoped>
.nav-link{
    width: 133px;
    height: 50px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.165px;

color: #232323;
}
.nav-link:active{
    width: 133px;
    height: 50px;
    background: #7E98DF;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 1px;
    color: #FFFFFF;
}
.nav-link:focus{
    width: 133px;
    height: 50px;
    background: #7E98DF;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 1px;
    color: #FFFFFF;
}
</style>
