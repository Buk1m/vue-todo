<template>
  <div>
    <form v-on:submit.prevent="addTodo" class="d-flex flex-column">
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          v-model="title"
          name="title"
          placeholder="Add Todo..."
        >
        <input class="btn btn-success form-control btn-lg" type="submit" value="Add">
      </div>
      <transition name="fade">
        <div
          class="alert alert-danger mt-2"
          role="alert"
          v-bind:key="error"
          v-for="error in errors"
        >{{error}}</div>
      </transition>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      errors: [],
      title: ""
    };
  },
  methods: {
    isFormValid: function() {
      this.errors = [];

      if (this.title.trim()) {
        return true;
      }

      this.errors.push("Title is required.");
      return false;
    },
    addTodo() {
      if (!this.isFormValid()) {
        return;
      }
      const newTodo = {
        title: this.title,
        completed: false
      };
      this.$emit("addTodo", newTodo);
      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 21px;
}
</style>
