const carMethods = {
    getCarInfo() {
        return `${this.make} ${this.model} released in ${this.year}`;
    },
    addOwner(owner) {
        this.owners.push(owner);
    },
    removeOwner(owner) {
        for (let index in this.owners) {
            if (this.owners[index] === owner) {
                this.owners.splice(index, 1);
                break;
            }
        }
    },
    getOwnersCount() {
        return this.owners.length;
    },
    getOwnerNames() {
        let fullNamesArray = [];
        for (let item of this.owners) {
            let fullNames = item.fullName();
            fullNamesArray.push(fullNames);
        }
        return fullNamesArray;
    },
    getFullInfo() {
        let count = this.getOwnersCount();
        let fullInfo = `${this.make} ${this.model} from ${this.year}.${count} person owns this car. These are - `;
        for (let item of this.getOwnerNames()) {
            fullInfo += `${item},`;
        }
        fullInfo = fullInfo.slice(0, fullInfo.length - 1);
        return fullInfo;
    }
}

function createCar(make,model,year) {
    let car = Object.create(carMethods);
    car.make = make;
    car.model = model;
    car.year = year;
    car.owners = [];
    return car;
}

const personMethods = {
    fullName() {
        return `${this.name} ${this.surname}`;
    },
    countCars() {
        return this.cars.length;
    },
    buysCar(car) {
        this.cars.push(car);
        car.addOwner(this);
    },
    sellsCar(car) {
        for (let index in this.cars) {
            if (this.cars[index] === car) {
                this.cars.splice(index, 1);
                break;
            }
        }
        car.removeOwner(this);
    },
    getAllCarsInfo() {
        let allCars = `${this.name} owns these cars: `;
        for (let item of this.cars) {
            allCars += `${item.getCarInfo()},`;
        }
        allCars = allCars.slice(0, allCars.length - 1);
        return allCars;
    }
}

function createPerson(name, surname, age, gender, cars = []){
    let person = Object.create(personMethods);
    person.name = name;
    person.surname = surname;
    person.age = age;
    person.gender = gender;
    person.cars = cars;
    return person;
}

let daniel916 = createPerson("Daniel", "Barbakadze", 21, "M", []);
let ilona = createPerson("Elon", "Musk", 30, "M");
let duti_picoti = createCar("BMW", "525", "1999");
let stodevianosto = createCar("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fullName: ilona.fullName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(),
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(),
    getFullInfo: duti_picoti.getFullInfo(),
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});