let store = { drivers: [], passengers: [], this: []};
// initialize store with key of items and users that each point to an empty array

let driverId = 0;
let passengerId = 0;
let tripId = 0;

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
    this.id = ++tripId
    store.trips.push(this);}
    if (driver) {
           this.driverId = driver.id;
       }
  }
  setDriver(driver){
    this.driverId = driver.id
  }
  driver(){
    return store.drivers.find(
      function(driver){
        return driver.id == this.driverId;
      }.bind(this)
    )
  }

}
