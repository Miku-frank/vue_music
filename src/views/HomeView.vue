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
  background-image: url('../images/background.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>