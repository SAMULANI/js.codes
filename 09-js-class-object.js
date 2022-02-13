// console.log("09-js-class-object.js");

// let someObject = {
//     someProperty: 'some value'
// }

// class Employee {

//     eid;
//     firstName;
//     salary;

//     getSalary = () => {
//         return this.salary;
//     }

// }

// let obj = new Employee();
// obj.eid = 101;
// obj.firstName = 'Sonu';
// obj.salary = 10.5;
// console.log(obj.getSalary());
// console.log(obj.firstName);


// class Product {
//     pid;
//     productName;
//     price;
//     constructor (pid, productName, price) {
//         console.log(pid);
//         console.log(productName);
//         console.log(price);
//     }
// }




// let myProduct = new Product(1001, 'laptop', 10.5);

// class Car {

//     mileage;
//     type;
//     name;

//     getMileage = () => {
//         return this.mileage;
//     }

// }
// let obj = new Car();
// obj.mileage = 40;
// obj.type = 'Sports';
// obj.name = "ferrari";
// console.log(obj.getMileage());
// console.log(obj.name);


// // class Rectangle {
// //     constructor
// // }

// class Product {
//     pid;
//     productName;
//     price;

//     sellProduct = () => {
//         console.log('Sell the product at ' + this.price);
//     }

//     constructor(pid, productName, price) {
//         this.pid = pid;
//         this.productName = productName;
//         this.price = price;
//     }
// }

// let myProduct = new Product(1001, 'laptop', 10.5);
// console.log(myProduct);
// myProduct.sellProduct();

class Rectangle {
    // rlength;
    // rwidth;
    // rarea;
    // calculateArea = () => {
    //     console.log("Area of rectangle is " + this.rarea) ;
    // }
    constructor(rlength,rwidth,rarea){
        this.rlength= rlength;
        this.rwidth= rwidth;
        this.rarea= rarea;
    }
}
let myRectangle = new Rectangle (10,12,120);
console.log(myRectangle.rlength);
// myRectangle.calculateArea ();