
import User from "./user.js"
export default class Employee extends User{
    constructor(id,firstName,lastName,city,age,salary){ //oluşturucu
      
        super(id,firstName,lastName,city,age)
        this.salary=salary

    }
}