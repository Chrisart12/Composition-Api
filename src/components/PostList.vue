<template>
  <div>
    <h1>PostListe </h1>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>

import SinglePost from "./SinglePost";

export default {

  components: {
    SinglePost
  },

  props: ["posts"],

   setup(props) {



    },
};
</script>

<style>
</style>