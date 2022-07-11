<template>
  <!-- <HomeView /> -->
  <router-view :key="$route.fullPath"/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

export default {
  name: "App",
  components: {
  }
}
</script>

<style>
</style>
