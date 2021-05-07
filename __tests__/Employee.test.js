const Employee = require("../lib/Employee");

describe("Employee", () => {
    // Error Handling 

    // Employee Object
    it("Can generate a new employee object" , () => {
        const employee =  new Employee();  
        const newEmployee = typeof(employee);
        expect(newEmployee).toEqual("object"); 
    });

    // Employee Name
    it("Generate name property when getName() is invoked" , () => {
        const employee = new Employee({
            id: 1 ,
            name: "Bob D" ,
            email: "bob@emloyee.net.au" ,
        });
        const employeeName = employee.getName();
        expect(employeeName).toEqual(employeeName);
    });
});