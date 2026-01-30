//classes
//A class is a blueprint for creating an object with pre-defined properties and methods.
//class helps to organize a code and reuse it.

class Employee {
    empID: string = "";
    age: number = 0;
    empName: string = "";
}

// Always use const to create an instance of a class (dont use var or let)
//Creating an instance of Employee class

const emp1 = new Employee();
emp1.empID = "E101";
emp1.age = 29;
emp1.empName = "John Doe";

const emp2 = new Employee();
emp2.empID = "E102";
emp2.age = 34;
emp2.empName = "Joe Smith";

class Department {
    deptID:string;
    deptName:string;
    constructor(id: string, name: string) {
        this.deptID = id;
        this.deptName = name;
    }
}

const dept1 = new Department("D101","Human Resources");
const dept2 = new Department("D102","Finance");

console.log(dept1);
console.log(dept2);