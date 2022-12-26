<template>
  <div>
    <div v-for="todo in state.todos" :key="todo._id">
        <h4>
            {{ todo.author }}
        </h4>
        <p>
            {{ todo.content }}
        </p>
    </div>
  </div>
</template>

<script>
import todocrud from "../modules/todocrud"
import { onMounted } from "vue";

export default {
  setup() {

    const { state, getAllTodos } = todocrud()

    onMounted(() => {
        getAllTodos()
    })

    return { state, getAllTodos };
  },
};
</script>

<style lang="scss" scoped></style>
