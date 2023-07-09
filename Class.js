class Employee {

    orgName='ORGANIZATION'
    //properties
    get location(){
        return 'india'
    }

    //constructor is method which executes by default when you create object of the class
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }

    //methods
    fullName(firstName,lastName) {
        console.log(this.firstName+this.lastName)
        
    }

}
let employee1=new Employee('Tim','Jon')
console.log(employee1.orgName) //ORGANIZATION
console.log(employee1.location) //india
console.log(employee1.fullName()) // TimJon
let employee2=new Employee('Mark','Hood')
console.log(employee2.fullName()) // MarkHood