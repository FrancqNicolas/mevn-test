import { ref } from "vue";
const axios = require("axios");

const getTodos = () => {
  const state = ref({
    author: "",
    content: "",
    todos: {},
  });

  const getAllTodos = async () => {
    try {
      await axios
        .get("http://localhost:2727/todos")
        .then(function (response) {
          state.value.todos = response.data;
        })
    } catch (error) {
        console.log(error);
    }
  };

  const addTodo = async () => {
    try {
      await axios
        .post("http://localhost:2727/todos/create", {
          author: state.value.author,
          content: state.value.content
        })
        .then(function () {
          getAllTodos()
        })
    } catch (error) {
        console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios
        .get(`http://localhost:2727/todos/remove/${id}`)
        .then(function () {
          getAllTodos()
        })
    } catch (error) {
        console.log(error);
    }
  };

  const editTodo = async (id) => {
    try {
      await axios
        .put(`http://localhost:2727/todos/update/${id}`)
        .then(function () {
          getAllTodos()
        })
    } catch (error) {
        console.log(error);
    }
  };

  return {
    state,
    getAllTodos,
    addTodo,
    deleteTodo,
    editTodo
  }
};

export default getTodos
