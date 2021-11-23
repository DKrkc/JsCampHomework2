


import User from "../models/user.js";

export default class UserService{
    constructor (loggerService){
        this.users=[]  
        this.loggerService=loggerService
        
    }
     
    List(users){
       return users
    }
    
     getUserSorted(users){
       return users.sort((user1,user2)=>{
        if(user1.firstName<user2.firstName){
           return -1
        }else if (user1.firstName===user2.firstName){
           return 0
        } else{
              return 1
        }
      })
       
    }

     getByIdUsers(id,users) {
         return users.find(u=>u.id===id)
     }
      
   
    CheckAge(user){
      let error=false
       if (Number.isNaN(Number.parseInt(+user.age))) {
        error=true
       }
      return error
    }  
        
  
}








   


