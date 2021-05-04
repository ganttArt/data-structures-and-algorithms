'use strict';

const { Animal, AnimalShelter } = require('../lib/fifo-animal-shelter.js');

describe('Animal Shelter class tests', () => {
  it('Can instantiate an animal object and an animalshelter object', () => {
    let Shelter = new AnimalShelter();
    let cat = new Animal('fuzzy', 'cat');
    expect(Shelter.dogs.isEmpty()).toEqual(true);
    expect(Shelter.cats.isEmpty()).toEqual(true);
    expect(cat.name).toEqual('fuzzy');
    expect(cat.species).toEqual('cat');
  });

  it('Can enqueue a dog and a cat into the animal shelter', () => {
    let shelter = new AnimalShelter();
    let cat = new Animal('fuzzy', 'cat');
    let dog = new Animal('angel', 'dog');
    shelter.enqueue(cat);
    shelter.enqueue(dog);
    expect(shelter.dogs.length).toEqual(1);
    expect(shelter.cats.length).toEqual(1);
    expect(shelter.dogs[0].name).toEqual('angel');
    expect(shelter.cats[0].name).toEqual('fuzzy');
  });

  it('Can dequeue a dog and a cat from the animal shelter', () => {
    let shelter = new AnimalShelter();
    let cat = new Animal('fuzzy', 'cat');
    let dog = new Animal('angel', 'dog');
    shelter.enqueue(cat);
    shelter.enqueue(dog);
    shelter.dequeue('dog');
    shelter.dequeue('cat');
    expect(shelter.dogs.length).toEqual(0);
    expect(shelter.cats.length).toEqual(0);
  });

  it('Will throw an error when a non-cat/dog is enqueued or dequeued', () => {
    let shelter = new AnimalShelter();
    try {
      shelter.enqueue(new Animal('fuzzy', 'ferret'));
    } catch (e) { expect(e).toEqual('Error: animal is neither a cat nor a dog'); }
    try {
      shelter.dequeue('ferret');
    } catch (e) { expect(e).toEqual('Error: animal is neither a cat nor a dog'); }
  });

  it('Will throw an error when a dog/cat is attempted to be dequeued when there are none in the shelter', () => {
    let shelter = new AnimalShelter();
    try {
      shelter.dequeue('dog');
    } catch (e) { expect(e).toEqual('Error: empty queue'); }
    try {
      shelter.dequeue('cat');
    } catch (e) { expect(e).toEqual('Error: empty queue'); }
  });
});
