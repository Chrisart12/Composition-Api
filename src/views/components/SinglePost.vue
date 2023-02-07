<template>
  <div>
    <h3>{{ post.title }} </h3>
    <div>{{ snippet }} </div>
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

</style>