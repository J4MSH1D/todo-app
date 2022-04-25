<script setup>
import { useDateBase } from "../stores/db.js";
import { useRoute } from "vue-router";
import Title from "../components/Title.vue";
import Error from "../components/Error.vue";
import { reactive, ref } from "vue";
import router from "../router/index.js";
const error = ref(false);
const route = useRoute();
const db = useDateBase();
db.getExactPost(route.params.col, route.params.id);
const updatingPost = reactive({
  title: "",
  text: "",
});

const change = async () => {
    if(updatingPost.title.trim() === "" || updatingPost.text.trim() === ""){
        error.value = true;
    } else {
        error.value = false;
        await db.update(route.params.col, route.params.id, updatingPost);
        updatingPost.title = updatingPost.text = "";
        router.push("/")
    }
}
</script>
<template>
  <Title />
  <div class="px-5 w-5/6 mx-auto rounded py-2 mt-10 bg-slate-500">
    <div class="text-xl">Update</div>
    <div class="text-lg mt-5">Title of the Todo</div>
    <div>
      <input
        v-if="db.currentPost?.title"
        v-model="db.currentPost.title"
        class="w-full opacity-40 mt-2 rounded-sm outline-none bg-transparent border-2 border-white pl-2 py-1"
        type="text"
        disabled
      />
    </div>
    <div class="text-lg mt-5">Text of the Todo</div>
    <div>
      <input
        v-if="db.currentPost?.text"
        class="w-full opacity-40 mt-2 rounded-sm outline-none bg-transparent border-2 border-white pl-2 py-1"
        type="text"
        disabled
        :value="db.currentPost?.text"
      />
    </div>
    <div class="text-lg mt-5">Title of the Todo</div>
    <div>
      <input
        v-model="updatingPost.title"
        class="w-full mt-2 rounded-sm outline-none bg-transparent border-2 border-white pl-2 py-1"
        type="text"
      />
    </div>
    <div class="text-lg mt-5">Text of the Todo</div>
    <div>
      <input
        class="w-full mt-2 rounded-sm outline-none bg-transparent border-2 border-white pl-2 py-1"
        type="text"
        v-model="updatingPost.text"
      />
    </div>
    <div>
      <button @click="change" class="mt-5 mb-2 px-3 py-1 border-2 border-white rounded transition capitalize font-semibold hover:bg-white hover:text-black">change</button>
    </div>
    <Error v-if="error" />
  </div>
</template>
