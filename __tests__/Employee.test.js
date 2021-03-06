const Employee = require("../lib/Employee");

describe("Employee", () => {
 
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

   // Employee Name
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
    it("Generate employee role when getRole() is invoked" , () => {
        const employee = new Employee(1, "Bob D",  "bob@emloyee.net.au");
        const employeeRole = employee.getRole();
        expect(employeeRole).toEqual("Employee");
    });
    
    // Error Handling
    it("Throws an error when id is not a number but a string" , () => {
        expect(() => {
            new Employee("Not a number");
        }).toThrow("Employee id must be a number, please re-enter");
    });

    // Error Handling
    it("Throws an error when name is a number not a string" , () => {
        expect(() => {
            new Employee(1, Number);
        }).toThrow("Employee name must be a string, please re-enter");
    });

    // Error Handling
    it("Throws an error when email is an empty string" , () => {
        expect(() => {
            new Employee(1, "Bob" , "");
        }).toThrow("You must enter an email address");
    });

    // Error Handling
    it("Throws an error when id is undefined" , () => {
        expect(() => {
            new Employee();
        }).toThrow("Employee id must be a number, please re-enter");
    });

    // Error Handling
    it("Throws an error when name is undefined" , () => {
        expect(() => {
            new Employee(1, );
        }).toThrow("Employee name must be a string, please re-enter");
    });

    // Error Handling
    it("Throws an error when email is undefined" , () => {
        expect(() => {
            new Employee(1,"bob" , );
        }).toThrow("You must enter an email address");
    });
});
