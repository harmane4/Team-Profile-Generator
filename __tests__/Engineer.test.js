const Engineer = require("../lib/Engineer")

describe("Engineer" , () => {
    it("Generates an engineer object with an id, name, email and GitHub username" , () => {
        expect(new Engineer(3,"Ernie Eng", "ernie@emloyee.net.au" , "https://github.com/harmane4")).toEqual({
            id: 3 ,
            name: "Ernie Eng" ,
            email: "ernie@emloyee.net.au" ,
            gitHub: "https://github.com/harmane4" ,
    });
    });

// Engineer GitHub Username
  it("Generate GitHub username when getGitHub() is invoked" , () => {
    const engineer = new Engineer(3,"Ernie Eng", "ernie@emloyee.net.au" , "https://github.com/harmane4");
    const engineerGitHub = engineer.getGitHub();
    expect(engineerGitHub).toEqual("https://github.com/harmane4");

});

 // Engineer 
 it("Generate engineer when getRole() is invoked" , () => {
    const engineer = new Engineer(3,"Ernie Eng", "ernie@emloyee.net.au" , "https://github.com/harmane4");
    const engineerGitHub = engineer.getRole();
    expect(engineerGitHub).toEqual("Engineer");
});

});