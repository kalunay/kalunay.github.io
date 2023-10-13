<template>
  <AppHeader />

  <AppFilters :active-filter="activeFilter" @set-filter="setFilter" />

  <main class="app-main">
    <AppTodolist 
      :todos="filterTodos"
      @toggle-todo="toggleTodo"
      @remove-todo="removeTodo"
    />

    <AppAddTodo @add-todo="addTodo" />
  </main>

  <AppFooter :stats="stats" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue'
import AppFilters from './components/AppFilters.vue';
import AppTodolist from './components/AppTodolist.vue'
import AppAddTodo from './components/AppAddTodo.vue'
import AppFooter from './components/AppFooter.vue'
import { Todo } from '@/types/Todo';
import { Filter } from './types/Filter';
import { Stats } from '@/types/Stats'

interface State {
    todos: Todo[],
    activeFilter: Filter
}

  export default defineComponent({
    components: {
        AppHeader,
        AppFilters,
        AppTodolist,
        AppAddTodo,
        AppFooter
    },
    data(): State {
        return {
            todos: [
                {id: 0, text: '1 Learn the basics of Typescript', completed: true},
                {id: 1, text: '2 Learn the basics of Typescript', completed: false},
                {id: 2, text: '3 Learn the basics of Typescript', completed: false},
                {id: 3, text: '4 Learn the basics of Typescript', completed: false}
            ],
            activeFilter: 'All'
        }
    },
    computed: {
      filterTodos(): Todo[] {
        switch (this.activeFilter) {
          case 'Active':
            return this.activeTodos
          case 'Done':
            return this.doneTodos
          case 'All':  
          default:
            return this.todos    
        }
      },
      stats(): Stats {
        return {
          active: this.activeTodos.length,
          done: this.doneTodos.length
        }
      },
      activeTodos() : Todo[] {
        return this.todos.filter(todo => !todo.completed)
      },
      doneTodos() : Todo[] {
        return this.todos.filter(todo => todo.completed)
      }
    },
    methods: {
      addTodo(todo: Todo){
        this.todos.push(todo)
      },
      toggleTodo(id: number){
          const targetTodo = this.todos.find((todo: Todo) => todo.id === id)
          if(targetTodo){
              targetTodo.completed = !targetTodo.completed
          }
      },
      removeTodo(id: number){
          this.todos = this.todos.filter((todo: Todo) => todo.id !== id)
      },
      setFilter(filter: Filter){
        this.activeFilter = filter
      }
    }
  })
</script>