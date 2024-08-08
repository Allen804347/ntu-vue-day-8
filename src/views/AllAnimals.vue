<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAnimalsStore } from '../stores/animals';
import { useCategoriesStore } from '../stores/categories';

const router = useRouter()

const categoriesStore = useCategoriesStore();
const animalsStore = useAnimalsStore();

const category = ref('');
// const { animals } = storeToRefs(animalsStore);

// console.log(animals)
// console.log(animals.filter(el => el.category === "鳥類"))

const filteredAnimals = computed(() => {
  if (category.value === '') {
    return animalsStore.animals
  }
  return animalsStore.animals.filter(el => el.category === category.value)
})

const deleteAnimal = (animal) => {
  animalsStore.deleteAnimal(animal);
};
const editAnimal = (id) => {
  router.push(`/edit/${id}`)
};
</script>

<template>
  <div>
    <h1>All Animals</h1>
    <router-link to="/add">Add New Animal</router-link>
    <div>
      <p>分類</p>
      <select v-model="category" placeholder="chose one">
        <option value="">無</option>
        <option v-for="category in categoriesStore.categories" :key="category" :value="category">{{ category }}</option>
      </select>
    </div>
    <ul>
      <transition-group name="list" tag="ul">
        <li v-for="animal in filteredAnimals" :key="animal.id">
          <router-link :to="`/animal/${animal.id}`">{{ animal.name }}</router-link>
          <button class="btn" @click="editAnimal(animal.id)" >Edit</button>
          <button class="btn" @click="deleteAnimal(animal)" >Delete</button>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<style scoped>
.btn {
  margin-left: 10px
}
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>