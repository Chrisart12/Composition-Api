<template>
  <div>
    <h3>{{ post.title }} </h3>
    <div>{{ snippet }} </div>
    <div v-for="tag in post.tags" :key="tag">
      <span class="tags">{{ tag }}</span>
      
    </div>
    <router-link :to="{ name: 'DetailView', params: { id: post.id }}" >Détail</router-link>
  </div>
</template>

<script>
// import { computed, onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import { computed, onMounted, onUnmounted, onUpdated } from 'vue'

export default {
    props: [ 'post' ],

    
   setup(props) {
   
        const snippet = computed(() => {
            return props.post.detail.substring(0, 20)  + "..."
        })

        onMounted(() =>console.log("onMounted"))
        onUnmounted(() =>console.log("onUnmounted"))
        onUpdated(() =>console.log("onUpdated onUpdated"))
        

        return { snippet }

       
    },

  
}
</script>

<style>
  .tags {
    background: yellowgreen;
  }
</style>