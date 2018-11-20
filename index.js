let store = { users: [], items: [] };
// initialize store with key of items and users that each point to an empty array

let driverId = 0;

class Driver{
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this);

  }

}
  
