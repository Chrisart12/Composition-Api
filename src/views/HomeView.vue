<template>
  <div>
    <div class="home">
      <!-- Le nom est {{ name }}, son âge est : {{ age }} -->
    </div>
    <p ref="p">Le nom est {{ name }}, son âge est : {{ age }}</p>
    <input type="text" v-model="name" />
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add age</button>

    <br />
    <br />
    <div>
      <input type="text" v-model="search" />
    </div>

    <div v-for="nam in machinNames" :key="nam">
      {{ nam }}
    </div>

    <p>Search terme : {{ search }}</p>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  name: "HomeView",
  setup() {
    // var name = "Issa";
    // var age = 46;

    const name = ref("Issa");
    const age = ref(46);

    const identity = ref({ name: "Issa", age: 46 });

    const p = ref(null);

    const handleClick = () => {
      // console.log(p, p.value);
      p.value.classList.add("test");
      // p.value.textContent = "Je suis ici";

      // name.value = "Will"
      // age.value = 23

      identity.value.age++;
    };

    const search = ref('');

    let names = ref(["Mangue", "Accueil", "Oreille", "Orteil", "Boubou", "BOUTEUIL", "Fauteuil", "BABA"]);

      watch(search, () => {
          console.log("search", search.value)
      })

      watchEffect(() => {
        console.log("watchEffect", search.value)
      })

    // names = names.value.filter((element) => {
    //   return (element = search.value);
    // });

    const machinNames = computed(() => {

      return names.value.filter((element) => element.toLowerCase().includes(search.value.toLowerCase()))

    })

    // onMounted(() => {
    //   console.log(p.value);
    // })

    return {
      name,
      age,
      handleClick,
      p,
      names,
      search,
      machinNames
    };
  },

  // created() {
  //   console.log("created Je suis ici");
  // },

  // mounted() {
  //   console.log("mounted Je suis ici");
  // },
};
</script>
