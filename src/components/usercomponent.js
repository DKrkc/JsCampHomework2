import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import { customers } from "../data/customers.js"
import { employees } from "../data/employees.js"
import Customer from "../models/customer.js"
import Employee from "../models/employee.js"

import CustomerService from "../services/customerService.js"
import EmployeeService from "../services/employeeService.js"



console.log("User component yüklendi")
console.log("loadCustomer() : ")
let logger1=new ElasticLogger()
let customerService= new CustomerService(logger1)
customerService.loadCustomer()
console.log(customerService.customers)
console.log(customerService.errors)


console.log("loadEmployee() :")
let employeeService= new EmployeeService(logger1)
employeeService.loadEmployee()
console.log(employeeService.employees)
console.log(employeeService.errors)

console.log("AddCustomer() : ")
let customerToAdd=new Customer(7,"Rüya","Pekmez","İzmir","24","6677767");
customerService.addCustomer(customerToAdd)
console.log(customerService.customers)

console.log("AddEmployee() : ")
let employeeToAdd=new Employee(8,"Necati","Aydın","Ankara","78",8000)
employeeService.addEmployee(employeeToAdd)
console.log(employeeService.employees)

console.log("ListCustomers() : ")

console.log(customerService.ListCustomers(customerService.customers))

console.log("ListEmployees() :")
console.log(employeeService.ListEmployees(employeeService.employees))

console.log("Sort Customers: ")
console.log(customerService.getUserSorted(customerService.customers))
console.log("Sort Employees: ")
console.log(employeeService.getUserSorted(employeeService.employees))

console.log("Get Customer By Id : ")
console.log(customerService.getByIdCustomers(7,customerService.customers))

console.log("Get Employer By Id : ")
console.log(employeeService.getByIdEmployees(5,employeeService.employees))














