const Intern = require("../lib/Intern")

describe("Intern" , () => {
    it("Generates an intern object with an id, name, email and school" , () => {
        expect(new Intern(4,"Indie Int", "indie@emloyee.net.au" , "UWA")).toEqual({
            id: 4 ,
            name: "Indie Int" ,
            email: "indie@emloyee.net.au" ,
            school: "UWA" ,
    });
    });

// Intern School
  it("Generates Intern's school when getSchool() is invoked" , () => {
    const intern = new Intern(4,"Indie Int", "indie@emloyee.net.au" , "UWA");
    const internSchool = intern.getSchool();
    expect(internSchool).toEqual("UWA");

});

 // Intern 
 it("Generate intern when getRole() is invoked" , () => {
    const intern = new Intern(4,"Indie Int", "indie@emloyee.net.au" , "UWA");
    const internRole = intern.getRole();
    expect(internRole).toEqual("Intern");
});

});