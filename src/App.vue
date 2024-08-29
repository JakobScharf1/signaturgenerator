<template>
  <div class="background"></div>

  <SignatureGenerator></SignatureGenerator>

</template>

<script setup>
  import SignatureGenerator from './components/SignatureGenerator.vue'

</script>

<style>
@import './assets/font.css';
@import './assets/main.css';

.background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 600px;
  height: 400px;
  background-image: url('./assets/background.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left bottom;
  z-index: -1;
}

</style>
