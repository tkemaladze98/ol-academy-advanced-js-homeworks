function Car(make, model, year) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.getCarInfo = function () {
            return `${this.make} ${this.model} released in ${this.year}`;
        },
        this.owners = [],
        this.addOwner = function (owner) {
            this.owners.push(owner);
        },
        this.removeOwner = function (owner) {
            for (let index in this.owners) {
                if (this.owners[index] === owner) {
                    this.owners.splice(index, 1);
                    break;
                }
            }
        },
        this.getOwnersCount = function () {
            return this.owners.length;
        },
        this.getOwnerNames = function () {
            let fullNamesArray = [];
            for (let item of this.owners) {
                let fullNames = item.fullName();
                fullNamesArray.push(fullNames);
            }
            return fullNamesArray;
        },
        this.getFullInfo = function () {
            let count = this.getOwnersCount();
            let fullInfo = `${this.make} ${this.model} from ${this.year}.${count} person owns this car. These are - `;
            for (let item of this.getOwnerNames()) {
                fullInfo += `${item},`;
            }
            fullInfo = fullInfo.slice(0, fullInfo.length - 1);
            return fullInfo;
        }
}
function Person(name, surname, age, gender, cars = []) {
    this.name = name,
        this.surname = surname,
        this.age = age,
        this.gender = gender,
        this.cars = cars,
        this.fullName = function () {
            return `${this.name} ${this.surname}`;
        },
        this.countCars = function () {
            return this.cars.length;
        },
        this.buysCar = function (car) {
            this.cars.push(car);
            let owner = this;
            let addOwner = function () {
                this.owners.push(owner);
            }
            addOwner.apply(car);
        },
        this.sellsCar = function (car) {
            for (let index in this.cars) {
                if (this.cars[index] === car) {
                    this.cars.splice(index, 1);
                    break;
                }
            }
            let owner = this;
            let removeOwner = function () {
                for (let index in this.owners) {
                    if (this.owners[index].fullName() === owner.fullName()) {
                        this.owners.splice(index, 1);
                        break;
                    }
                }
            }
            removeOwner.apply(car, owner);
        },
        this.getAllCarsInfo = function () {
            let allCars = `${this.name} owns these cars: `;
            for (let item of this.cars) {
                let getCarsInfo = function () {
                    let carInfo = this.getCarInfo();
                    allCars += `${carInfo},`
                }
                getCarsInfo.apply(item);
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





//problem-1 solution
let person = {
    name: "Daniel",
    sayHello: function () {
        console.log(this);
    },
    child: {
        sayHello: function () {
            console.log(this.name);
        },
    },
};

person.sayHello();
person.child.sayHello.apply(person)



//problem-2 solution
var application = {
    alertBox: function (value) {
        alert(value);
    },
    initialize: function () {
        setTimeout(function () {
            // at this moment setTimeout is called by window, that's why context is window
            this.alertBox("hello world");
        }.bind(application), 2000);
    },
};


//problem-3 solution
let colors = ["red", "green", "yellow", "blue", "violet"];

function changeColor(color) {
    this.style.color = color; // Problem: here 'this' refers to window object, fix it to work
    console.log(this);
}

for (let i = 1; i <= 5; i++) {
    let element = document.getElementById("div" + i);
    element.addEventListener("click", changeColor.apply(element,colors[i-1]));
}