<template>
  <div>
    <div v-if="err">{{ err }}</div>
    <div v-if="post">
        <!-- <h1>{{ post.title }} </h1>
        <p>{{ post.detail }} </p> -->
        <DetailPost :post="post" />
    </div>
   
    
   
  </div>
</template>

<script>

import DetailPost  from "./../components/DetailPost.vue";
import getPost from "./../composables/getPost";

export default {

    components: { 

        DetailPost,
    },

    props: ['id'],

    setup(props) {

        
        const { post, err, load} = getPost(props.id)

        load()
        console.log("props", post.value)
        return {  post, err }

    }

}

</script>

<style>

</style>