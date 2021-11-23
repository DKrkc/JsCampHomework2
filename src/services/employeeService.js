import UserService from "./userService.js";
import { employees } from "../data/employees.js";
import DataError from "../models/dataError.js";

export default class EmployeeService extends UserService {
    constructor (loggerService){
        super(loggerService)
        this.employees=[]
        this.errors=[]
    }

    checkEmployeeValidityForErrors(employee){
        let requiredFields="id firstName lastName city age salary".split(" ")
        let hasErrors=false
        for (const field of requiredFields){
           if(!employee[field]){
              hasErrors=true
              this.errors.push(new DataError(`Validation problem. ${field} is required`,employee)) 
 
 
           }
        }
        if(super.CheckAge(employee)){
            hasErrors=true
            this.errors.push(new DataError(`Validation problem. ${employee.age} is not a number`, employee))
        }
       
        return hasErrors
     }
        
     loadEmployee(){
        for(const employee of employees){
           if(!this.checkEmployeeValidityForErrors(employee)){
              this.employees.push(employee)
           }
           else{
              this.errors.push(new DataError("Wrong information",employee))
           }
        } 
     }

     addEmployee(employee)
     {
        if(!this.checkEmployeeValidityForErrors(employee)){
            this.employees.push(employee)
            this.loggerService.log(employee)
         }
         else{
            this.errors.push(
                new DataError("This user can not be added.",employee))
         }

     }
      
     ListEmployees(employees)
     {
        return super.List(employees)
     }

     getEmployeeSorted(employees){
        return super.getUserSorted(employees)
     }

      getByIdEmployees(id,employees){
       
        return super.getByIdUsers(id,employees)
      }
}