import User from "./user.js"

export default class Customer extends User{
    constructor(id,firstName,lastName,city,age,creditCardNumber){ //oluşturucu
      
        super(id,firstName,lastName,city,age)
        this.creditCardNumber=creditCardNumber

    }
}