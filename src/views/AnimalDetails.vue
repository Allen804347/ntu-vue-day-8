<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAnimalsStore } from '../stores/animals';

const route = useRoute();
const router = useRouter();
const animalsStore = useAnimalsStore();

const animalId = route.params.id;
const animal = computed(() => animalsStore.animals.find(a => a.id.toString() === animalId));

const goBack = () => {
  router.push('/');
};
</script>

<template>
  <div v-if="animal">
    <h1>{{ animal.name }}</h1>
    <img :src="animal.image" :alt="animal.name">
    <p>{{ animal.description }}</p>
    <p>分類：{{ animal.category }}</p>
    <button @click="goBack">Go Back</button>
  </div>
  <div v-else>
    <p>Animal not found</p>
    <button @click="goBack">Go Back</button>
  </div>
</template>
