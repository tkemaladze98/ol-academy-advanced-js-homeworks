class Vechile {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
class Car extends Vechile {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
        this.owners = [];
    }
    getCarInfo() {
        return `${this.make} ${this.model} released in ${this.year}`;
    }
    addOwner(owner) {
        this.owners.push(owner);
    }
    removeOwner(owner) {
        for (let index in this.owners) {
            if (this.owners[index] === owner) {
                this.owners.splice(index, 1);
                break;
            }
        }
    }
    getOwnersCount() {
        return this.owners.length;
    }
    getOwnerNames() {
        let fullNamesArray = [];
        for (let item of this.owners) {
            let fullNames = item.fullName();
            fullNamesArray.push(fullNames);
        }
        return fullNamesArray;
    }
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
class Person {
    constructor(name, surname, age, gender, cars = []) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.cars = cars;
    }
    fullName() {
        return `${this.name} ${this.surname}`;
    }
    countCars() {
        return this.cars.length;
    }
    buysCar(car) {
        this.cars.push(car);
        car.addOwner(this);
    }
    sellsCar(car) {
        for (let index in this.cars) {
            if (this.cars[index] === car) {
                this.cars.splice(index, 1);
                break;
            }
        }
        car.removeOwner(this);
    }
    getAllCarsInfo() {
        let allCars = `${this.name} owns these cars: `;
        for (let item of this.cars) {
            allCars += `${item.getCarInfo()},`;
        }
        allCars = allCars.slice(0, allCars.length - 1);
        return allCars;
    }
}




let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");
let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);


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