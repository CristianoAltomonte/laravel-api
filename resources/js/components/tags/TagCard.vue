<template>
  <div>
    <!-- Stampare la lista dei posts di questo preciso tag -->

    <div v-for="elem in tag" :key="elem.name">
      <ul>
        <li v-for="post in elem.posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagCard",
  components: {},
  data() {
    return {
      tag: [],
    };
  },
  mounted() {
    this.getTag();
  },
  methods: {
    getTag() {
      axios
        .get("http://localhost:8000/api/tags/" + this.$route.params.name)
        .then((res) => {
          console.log(res.data);
          this.tag = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
