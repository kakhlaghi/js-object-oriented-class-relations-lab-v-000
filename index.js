let store = { drivers: [], passengers: [], this: []};
// initialize store with key of items and users that each point to an empty array

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver{
  constructor(name, trip) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this);
  }
}

class Passenger{
  constructor(name, trip){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this);
  }
  if (trip) {
      this.tripId = trip.id;
    }
}
setTrip(trip){
  this.tripId = trip.id
}
trip(){
  return store.trips.find(
    function(trip){
      return trip.id == this.tripId;
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
