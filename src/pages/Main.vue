<script>

import IconBtn from "@/components/ButtonWithIcon.vue";
import Waves from "../components/Waves.vue";

// noinspection JSUnresolvedReference
export default {
  name: "Main",
  components: {Waves, IconBtn},
  data(){
    return {
      btns: [{
        icon: "✨",
        linkText: "Watch demo",
        fn: () => {
          this.$router.push("/error?code=404")
        }
      },{
        icon: "💸",
        linkText: "Try out",
        fn: () => {
          this.$router.push("/login")
        }
      },
      ]
    }
  }
}
</script>

<template>
  <section class="main_section">
    <h1 class="header">wellforms</h1>
    <span class="short_span">Make <span class="yellow">your</span> surveys our <span class="violet">problem</span></span>
    <p class="short_description">
      wellforms is an <span class="cursive">open-source</span> application where you can <span class="cursive">create,<br> customise, link</span> to APIs, your staff or audience surveys
    </p>
  </section>
  <section class="btns_section">
    <icon-btn :buttons="btns"></icon-btn>
  </section>
  <waves>
  </waves>
</template>

<style scoped>
    .header{
      font-family: ABeeZee, sans-serif;
      font-size: 76px;
      text-shadow: 0 0 2px black;
    }
    .btnn{
      background: red !important;
    }
    .main_section{
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 20vh;
    }
    .btns_section{
      display: flex;
      justify-content: center;
      gap: 20px;
    }
    .short_span{
      font-family: ABeeZee, sans-serif;
      font-size: 20px;
      font-weight: 500;
    }
    .yellow{
      color: #E4B611;
    }
    .violet{
      color: #5200FF;
    }
    .short_description{
      font-family: ABeeZee, sans-serif;
      font-size: 18px;
      margin-top: 5vh;
      text-align: center;
    }
    .cursive{
      font-style: italic;
    }
</style>