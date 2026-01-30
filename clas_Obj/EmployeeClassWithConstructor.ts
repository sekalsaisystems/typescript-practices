class Employee {
    empID: string;
    age: number;

    constructor(id: string, age: number) {
        this.empID = id;
        this.age = age;
    }
}

const emp1 = new Employee("E101", 29);
const emp2 = new Employee("E102", 34);

console.log(emp1);
console.log(emp2);