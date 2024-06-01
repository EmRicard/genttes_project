<template>
  <HelloWorld />
  <DestaqueHome />
  <SobreNos />
</template>

<script>
import DestaqueHome from './components/DestaqueHome.vue';
import HelloWorld from './components/HelloWorld.vue';
import SobreNos from './components/SobreNos.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    DestaqueHome,
    SobreNos
  }
}
</script>

<style>
  *{
    background-color: #f8f9fa;
  }
</style>
