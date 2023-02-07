<template>
  <div>
    <div v-if="err">{{ err }} </div>
    <div v-if="posts.length">
        <PostList :posts="posts"  v-if="showPost" />
    </div>
    <div v-else>
        Loading...
    </div>
    
    <button @click="togglePost">Toggle Posts </button>
    <button @click="posts.pop()">Delete post </button>
  </div>
</template>

<script>
import PostList from "./../components/PostList.vue";
import getPosts from "./../composables/getPosts";

import { ref } from "vue";

export default {

  components: { 
    PostList,
  },

  setup() {

    const { posts, err, load } = getPosts()

    load()
  
    const showPost = ref(true)

      const togglePost = () => {
          showPost.value = !showPost.value
      }

    return { posts, showPost, togglePost, err };
  },
};
</script>

<style>
</style>