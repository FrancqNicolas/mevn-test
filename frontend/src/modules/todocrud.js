import { ref } from "vue";
const axios = require("axios");

const getTodos = () => {
  const state = ref({
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

  return {
    state,
    getAllTodos
  }
};

export default getTodos
