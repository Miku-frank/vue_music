<template>
  <!-- <HomeView /> -->
  <router-view :key="$route.fullPath"/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { useStore } from 'vuex';

export default {
  name: "App",
  components: {
  },
  mounted() {
    const store = useStore();
    let userinfo = JSON.parse(localStorage.getItem('userinfo'));
    if (userinfo === null) return ;

    store.commit("UpdataUser", userinfo);
  }
}
</script>

<style>
</style>
