let store = { drivers: [], passengers: []};
// initialize store with key of items and users that each point to an empty array

let driverId = 0;
let passengerId = 0;

class Driver{
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this);
  }
}

class Passenger{
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this);
  }
}

class Trip{
  constructor(){

  }
}
