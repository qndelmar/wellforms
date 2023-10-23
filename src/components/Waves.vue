<script>
export default {
  name: "Waves"
}
</script>

<template>
  <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <slot></slot>
  </footer>
</template>

<style scoped>
.wave {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("@/assets/wave.svg");
  background-size: 950px 110px;
}

.wave#wave1 {
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: animateWaves 8s linear infinite;
}

.wave#wave2 {
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: animate 8s linear infinite !important;
}

.wave#wave3 {
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: animateWaves 6s linear infinite;
}

.wave#wave4 {
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: animate 6s linear infinite;
}

@keyframes animateWaves {
  0% {
    background-position-x: 1000px;
  }
  50% {
    background-position-x: 0px;
  }
  100%{
    background-position-x: 998px;
  }
}

@keyframes animate {
  0% {
    background-position-x: -1000px;
  }
  50% {
    background-position-x: 0px;
  }
  100%{
    background-position-x: -998px;
  }
}
.footer {
  position: relative;
  background: #6BB8FF;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30vh;
}
</style>