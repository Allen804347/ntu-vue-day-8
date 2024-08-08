import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: ['鳥類', '哺乳類', '水生生物'],
  }),
  // actions: {
    // addAnimal(animal) {
    //   this.categories.push(animal);
    //   this.savecategories();
    // },
    // deleteAnimal(animal) {
    //   this.categories = this.categories.filter(a => a !== animal);
    //   this.savecategories();
    // },
    // savecategories() {
    //   localStorage.setItem('categories', JSON.stringify(this.categories));
    // },
  // },
});
