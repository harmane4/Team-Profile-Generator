class Employee {

    constructor(id, name, email) {   

        if (id === "Not a number" || id === undefined) {
            throw Error("Employee id must be a number, please re-enter")
        }

        if (name === Number || name === undefined) {
            throw Error("Employee name must be a string, please re-enter")
        }

        if (email === "" || email === undefined) {
            throw Error("You must enter an email address")
        }
        this.id = id; 
        this.name = name;
        this.email = email;
    }
    
    getName() {
       return this.name
    }

    getId() {
        return this.id
     }

     getEmail() {
        return this.email
     }

     getRole() {
         return "Employee"
     }
    
}


module.exports = Employee;