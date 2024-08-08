import { defineStore } from 'pinia';

// {
//   id: '123456789',
//   name: 'pig',
//   category: '哺乳類',
//   image: '/test.jpg',
//   description: 'Big big pig.'
// }

export const useAnimalsStore = defineStore('animals', {
  state: () => ({
    animals: JSON.parse(localStorage.getItem('animals')) || [],
  }),
  actions: {
    addAnimal(animal) {
      this.animals.push(animal);
      this.saveAnimals();
    },
    deleteAnimal(animal) {
      // 怎麼透過 id 把 animal 刪掉
      // const index = this.animals.find(el => el.id === id) // 如果傳進來的是 ID
      // const index = this.animals.indexOf(animal) // 如果傳進來的是目標物件
      // [this.animals[index], this.animals[this.animals.length - 1]] = [this.animals[this.animals.length - 1], this.animals[index]];
      // this.animals.pop()
      this.animals = this.animals.filter(a => a !== animal);
      this.saveAnimals();
    },
    saveAnimals() {
      localStorage.setItem('animals', JSON.stringify(this.animals));
    },
  },
});
