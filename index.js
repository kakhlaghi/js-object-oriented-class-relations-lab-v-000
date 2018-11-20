let store = { drivers: [], passengers: [], trips: []};
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
  constructor(name, trips){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this);
    if (trips) {
        this.tripsId = trips.id;
      }
  }
  setTrips(trip){
    this.tripsId = trips.id
    }
  trips(){
    return store.trips.find(
      function(trip){
        return trips.id == this.tripsId;
      }.bind(this)
    )
  }
}


class Trip{
  constructor(driver, passenger){
    this.id = ++tripId
    store.trips.push(this);
    if (driver) {
        this.driverId = driver.id;
       }
    if (passenger) {
        this.passengerId = passenger.id;
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
  setPassenger(passenger){
    this.passengerId = passenger.id
  }
  passenger(){
    return store.passengers.find(
      function(passenger){
        return passenger.id == this.passengerId
        }.bind(this)
      )
    }
}
