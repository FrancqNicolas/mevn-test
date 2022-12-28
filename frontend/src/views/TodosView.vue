<template>
  <div>
    <button @click="addTodo()">Nouvelle todo</button>
    <div>
      <input type="text" placeholder="Auteur" v-model="state.author">
    </div>
    <div>
      <textarea v-model="state.content"></textarea>
    </div>
    <div class="todo-container" v-for="todo in state.todos" :key="todo._id">
      <div>
        {{ todo.author }}

        <a href="#" @click="editTodo(todo._id)"><i class="fa-solid fa-pen"></i></a>
        <a href="#" @click="deleteTodo(todo._id)"><i class="fa-solid fa-xmark"></i></a>
      </div>
      <hr/>
      <p>
        {{ todo.content }}
      </p>
    </div>
  </div>
</template>

<script>
import todocrud from "../modules/todocrud";
import { onMounted } from "vue";

export default {
  setup() {
    const { state, getAllTodos, addTodo, deleteTodo, editTodo } = todocrud();

    onMounted(() => {
      getAllTodos();
    });

    return { state, getAllTodos, addTodo, deleteTodo, editTodo };
  },
};
</script>

<style lang="scss" scoped></style>
