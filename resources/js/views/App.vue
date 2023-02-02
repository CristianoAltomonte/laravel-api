<template>
  <div>
    <!-- <WorkInProgress /> -->

    <!-- Scrivere i dati dei posts -->
    <!-- <PostsList /> -->

    <!-- header navigazione -->
    <Header />

    <router-view></router-view>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
// import WorkInProgress from "../components/WorkInProgress.vue"
import PostsList from "../components/posts/PostsList.vue";

export default {
  name: "App",

  components: {
    //Qui inseriamo i futuri componenti per questa views
    // WorkInProgress,
    PostsList,
    Header,
  },
};
</script>
