const Manager = require("../lib/Manager")

describe("Manager" , () => {

    // Creating a new manager object 
    it("Generates an manager object with an id, name, email and office number" , () => {
        expect(new Manager(1,"Bob D", "bob@emloyee.net.au" , 100)).toEqual({
            id: 1 ,
            name: "Bob D" ,
            email: "bob@emloyee.net.au" ,
            officeNumber: 100 ,
    });
    });

     // Manager Office Number 
  it("Generate office number when getOfficeNumber() is invoked" , () => {
    const manager = new Manager(1, "Bob D",  "bob@emloyee.net.au" , 100);
    const managerOfficeNumber = manager.getOfficeNumber();
    expect(managerOfficeNumber).toEqual(100);

});

 // Manager 
 it("Generate manager when getRole() is invoked" , () => {
    const manager = new Manager(1,"Bob D", "bob@emloyee.net.au" , 100);
    const managerRole = manager.getRole();
    expect(managerRole).toEqual("Manager");
});
});

 