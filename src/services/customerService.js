
import UserService from "./userService.js"
import DataError from "../models/dataError.js"
import { customers } from "../data/customers.js"





export default class CustomerService extends UserService{
    constructor (loggerService){
        super(loggerService)
        this.customers=[]
        this.errors=[]
    }   
      
      
   

    checkCustomerValidityForErrors(customer){
        let requiredFields="id firstName lastName city age creditCardNumber".split(" ")
        let hasErrors=false
        for (const field of requiredFields){
           if(!customer[field] ){
              hasErrors=true
              this.errors.push(new DataError(`Validation problem. ${field} is required`,customer)) 
           }
        }     
           if(super.CheckAge(customer)){
              hasErrors=true
              this.errors.push(new DataError(`Validation problem. ${customer.age} is not a number`, customer))
           }
           return hasErrors
         }  
          
        
       
        
          loadCustomer(){
      for(const customer of customers){
         if(!this.checkCustomerValidityForErrors(customer)){
            this.customers.push(customer)
         }else{
            this.errors.push(new DataError("Wrong information",customer))
         }
       } 
        
     } 

     addCustomer(customer)
     {
      if(!this.checkCustomerValidityForErrors(customer)){
         this.customers.push(customer)
         this.loggerService.log(customer)
      }
      else{
         this.errors.push(
            new DataError("This user can not be added.",customer))
      }

     }
       
          
      ListCustomers(customers)
      {
          return super.List(customers)
      }
     
      getCustomerSorted(){
           return super.getUserSorted(customers)
      }   

      getByIdCustomers(id,customers){
       
         return super.getByIdUsers(id,customers)
      }
}

       
       
        
      
 
