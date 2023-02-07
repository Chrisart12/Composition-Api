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
import PostList from "./components/PostList.vue";

import { ref } from "vue";

export default {

  components: {
    PostList,
  },

  setup() {

    const posts = ref([])
    const err = ref(null)

    const load = async () => {

      try {

        const data = await fetch("http://localhost:3000/posts")

          if (!data.ok) {
            throw Error("Il n'a pas de données");
          }

          posts.value = await data.json()
        
      } catch (error) {
          err.value = error.message
          console.log(err.value)
      }

    }

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