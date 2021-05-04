'use strict';

const Queue = require('./queue');

function Animal (animalName, species) {
  this.name = animalName;
  this.species = species;
}

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogs.enqueue(animal);
    } else if (animal.species === 'cat') {
      this.cats.enqueue(animal);
    } else {
      throw 'Error: animal is neither a cat nor a dog';
    }
  }

  dequeue(species) {
    if (species === 'dog') {
      return this.dogs.dequeue();
    } else if (species === 'cat') {
      return this.cats.dequeue();
    } else {
      throw 'Error: animal is neither a cat nor a dog';
    }
  }
}

module.exports = {
  Animal: Animal,
  AnimalShelter: AnimalShelter
};
