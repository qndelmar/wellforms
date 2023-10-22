<script>
export default {
  name: "icon-btn",
  props: {
    buttons: {
      type: Array,
      required: true
    },
    width: Number
  }
}
</script>

<template>
  <button class="btn" v-for="btn in buttons" @click="btn.fn">
    <span>{{btn.icon}}</span>
    <span>{{btn.linkText}}</span>
  </button>
</template>

<style scoped>
  .btn{
    border: 1px black solid;
    border-radius: 20px;
    padding: 8px 10px;
    display: grid;
    grid-template-columns: 1fr 6fr;
    width: 150px;
    background: none;
    font-family: ABeeZee, sans-serif;
    font-weight: 500;
    font-size: 17px;
  }
</style>