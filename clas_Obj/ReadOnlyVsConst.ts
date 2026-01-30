
// variables declared using let, var, const are block scoped variables
// readOnly are used in class properties
// Why ReadOnly?
// 1. To prevent accidental modification of properties after initialization.
// 2. To ensure immutability of certain properties in a class.
// 3. To enhance code readability and maintainability by clearly indicating which properties should not change.

class Car{
    readonly carID:string="";
    readonly model:string;

    constructor(model:string){
        this.model=model;
    }
}