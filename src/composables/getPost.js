import { ref } from "vue";

const getPost = (id) => {
    const post = ref(null);
    const err = ref(null);

    const load = async () => {
        try {
            const data = await fetch("http://localhost:3000/posts/" + id);

            if (!data.ok) {
                throw Error("Il n'a pas de données");
            }

            post.value = await data.json();
        } catch (error) {
            err.value = error.message;
            console.log(err.value);
        }
    };

    return { post, err, load}
};

export default getPost
