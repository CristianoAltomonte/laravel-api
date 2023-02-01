<template>
  <div>

    <WorkInProgress />

    <!-- Scrivere i dati dei posts -->
    <PostsList />
  </div>

</template>


<script>

import WorkInProgress from "../components/WorkInProgress.vue"
import PostsList from "../components/posts/PostsList.vue";

export default {

  name: "App",

  components: {
    //Qui inseriamo i futuri componenti per questa views
    WorkInProgress,
    PostsList,


  },
};

</script>
