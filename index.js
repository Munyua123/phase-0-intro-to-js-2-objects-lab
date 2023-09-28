// Write your solution in this file!
let employee = {
    name : "Ham",
    streetAddress: "10 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployee = {...employee, 'streetAddress': '11 Broadway'}
    return updateEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee["streetAddress"] = "12 Broadway"
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
   const newEmployee = {employee, "streetAddress" : ""}
   return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let newEmployee = {employee, "streetAddress" : ""} 
    delete employee[key]
    return employee
     return newEmployee
}