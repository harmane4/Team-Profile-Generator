const Employee = require("../lib/Employee");

describe("Employee", () => {
    // Error Handling 
 
    // Employee Object
    it("Can generate a new employee object with the name of id, name and email" , () => {
       expect(new Employee(1,"Bob D", "bob@emloyee.net.au")).toEqual({
            id: 1 ,
            name: "Bob D" ,
            email: "bob@emloyee.net.au" ,
        });  
    });

      // Employee ID
      it("Generate employee ID when getID() is invoked" , () => {
        const employee = new Employee(1, "Bob D",  "bob@emloyee.net.au");
        const employeeId = employee.getId();
        expect(employeeId).toEqual(1);
    });

   // Employee ID
   it("Generate employee name when getName() is invoked" , () => {
    const employee = new Employee(1, "Bob D",  "bob@emloyee.net.au");
    const employeeName = employee.getName();
    expect(employeeName).toEqual("Bob D");
});

      // Employee Email
   it("Generate employee email when getEmail() is invoked" , () => {
    const employee = new Employee(1, "Bob D",  "bob@emloyee.net.au");
    const employeeEmail = employee.getEmail();
    expect(employeeEmail).toEqual("bob@emloyee.net.au");
});
    // Employee 
    it("Generate employee when getRole() is invoked" , () => {
        const employee = new Employee(1, "Bob D",  "bob@emloyee.net.au");
        const employeeRole = employee.getRole();
        expect(employeeRole).toEqual("Employee");
    });
});
