// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import AllAnimals from '../views/AllAnimals.vue';
import AnimalDetails from '../views/AnimalDetails.vue';
import AddAnimal from '../views/AddAnimal.vue';
import EditAnimal from '../views/EditAnimal.vue';

const routes = [
  { path: '/', component: AllAnimals },
  { path: '/animal/:id', component: AnimalDetails },
  { path: '/edit/:id', component: EditAnimal },
  { path: '/add', component: AddAnimal },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
