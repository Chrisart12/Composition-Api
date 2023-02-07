import { ref } from "vue";

const getPosts = () => {
    const posts = ref([]);
    const err = ref(null);

    const load = async () => {
        try {
            const data = await fetch("http://localhost:3000/posts");

            if (!data.ok) {
                throw Error("Il n'a pas de données");
            }

            posts.value = await data.json();
        } catch (error) {
            err.value = error.message;
            console.log(err.value);
        }
    };

    return { posts, err, load}
};

export default getPosts
