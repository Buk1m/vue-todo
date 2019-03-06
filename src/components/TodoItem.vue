<template>
 <transition name="fade">
  <div class="p-2" v-bind:class="{'is-complete':todo.completed}">
    <p class="m-0">
      <input class="m-2" type="checkbox" v-on:change="markComplete" v-model="todo.completed">
      <span class="ml-3">{{todo.title}}</span>
      <button @click="$emit('del-todo', todo.id)" class="btn btn-danger del">
        <i class="fas fa-trash-alt m-0"></i>
      </button>
    </p>
  </div>
 </transition>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete(todo) {
      todo.completed = !todo.completed;
    }
  }
};
</script>

<style scope>
.is-complete {
  text-decoration: line-through;
}

.del {
  position: relative;

  float: right;
  width: 35px;
  height: 35px;
}

i {
  position: relative;
  top: -1px;
  left: -2px;
}

input[type="checkbox"] {
  position: relative;
  -ms-transform: scale(1.5);
  -moz-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  -o-transform: scale(1.5);
  top: 2px;
}
</style>