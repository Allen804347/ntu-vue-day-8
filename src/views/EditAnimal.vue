<script setup>
import { ref, computed } from 'vue';
import { useAnimalsStore } from '../stores/animals';
import { useCategoriesStore } from '../stores/categories';
import { useRouter, useRoute } from 'vue-router';


const animalsStore = useAnimalsStore();
const categoriesStore = useCategoriesStore();
const router = useRouter();
const route = useRoute();

const animalId = route.params.id;
const animal = animalsStore.animals.find(a => {
  return a.id.toString() === animalId
});

const name = ref(animal.name);
const image = ref(animal.image);
const category = ref(animal.category);
const description = ref(animal.description);

const editAnimal = () => {
  animal.name = name.value;
  animal.image = image.value;
  animal.category = category.value,
  animal.description = description.value;
  router.push('/');
};
</script>

<template>
  <div>
    <h1>Edit Animal</h1>
    <div class="item">
      <input v-model="name" placeholder="Name">
      <input v-model="image" placeholder="Image URL">
      <select v-model="category" placeholder="chose one">
        <option v-for="category in categoriesStore.categories" :key="category" :value="category">{{ category }}</option>
      </select>
      <textarea v-model="description" placeholder="Description"></textarea>
      <button @click="editAnimal">Update Animal</button>
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