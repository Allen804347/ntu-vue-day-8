<script setup>
import { ref } from 'vue';
import { useAnimalsStore } from '../stores/animals';
import { useCategoriesStore } from '../stores/categories';
import { useRouter } from 'vue-router';

const animalsStore = useAnimalsStore();
const categoriesStore = useCategoriesStore();

const router = useRouter();

const name = ref('');
const image = ref('');
const category = ref('');
const description = ref('');

const animalList = [] // 所有的 animals

const addAnimal = () => {
  const newAnimal = {
    id: Date.now(),
    name: name.value,
    category: category.value,
    image: image.value,
    description: description.value,
  }
  // For basic
  // animalList.push(newAnimal)
  
  // For parent and children component
  // const emits = defineEmits(['pushAnimalToList'])
  // emits('pushAnimalToList', newAnimal)

  // For store
  animalsStore.addAnimal(newAnimal);
  router.push('/');
};
</script>

<template>
  <div>
    <h1>Add Animal</h1>
    <div class="item">
      <input v-model="name" placeholder="Name">
      <input v-model="image" placeholder="Image URL">
      <select v-model="category" placeholder="chose one">
        <option v-for="category in categoriesStore.categories" :key="category" :value="category">{{ category }}</option>
      </select>
      <textarea v-model="description" placeholder="Description"></textarea>
      <button @click="addAnimal">Add Animal</button>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  min-width: 600px;
  width: 50vw;
}
</style>