<template>
  <div id="background">
    <MusicContent />
  </div>
</template>

<script>
import MusicContent from '../components/MusicContent.vue';

export default {
    name: "HomeView",
    components: { 
      MusicContent 
    }
}
</script>

<style scoped>
#background {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/preview.jpg');
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>