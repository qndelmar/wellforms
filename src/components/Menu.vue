<script>
export default {
  name: "app-menu"
}
</script>

<template >
  <menu class="app_menu" v-if="this.$route.fullPath!=='/login'">
    <router-link to="/about" class="link">About</router-link>
    <router-link to="/support" class="link">Support</router-link>
    <a href="https://github.com/qndelmar/wellforms" class="link">GitHub</a>
    <div class="" role="button">
      <router-link to="/login" class="link login_btn">Get started</router-link>
    </div>
  </menu>
</template>

<style scoped>
    .link{
      font-family: ABeeZee,sans-serif;
      text-decoration: none;
      color: black;
      font-size: 18px;
      margin-right: 40px;
    }
    .login_btn{
      border: 1px black solid;
      padding: 5px 15px 5px 15px;
      border-radius: 20px;
    }
    .app_menu{
      display: flex;
      align-items: center;
      justify-content: right;
      margin-right: 10vw;
      margin-top: 3vh;
    }
</style>