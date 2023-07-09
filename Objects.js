//object is colletion of properties
let person={
    firstName:"Tim",
    lastName:"David",
    age:24,
    fullName:function(){
        console.log(this.firstName+this.lastName)
    }
}
console.log(person.fullName())
console.log(person.firstName) //Tim
console.log(person['firstName']) //Tim
person.firstName="Jon"
console.log(person.firstName) //Jon
person.gender='male'
console.log(person) //{ firstName: 'Jon', lastName: 'David', gender: 'male' }
delete person.gender //deleting property form the object person
person.firstName="Tim Josh" //updating exsiting property in the person object
console.log(person) //{ firstName: 'Tim Josh', lastName: 'David' }

//To check particular key persent in the obejct, if exists it will return true or else return false
console.log('gender' in person) //false

//print all the values of person object
for(let key in person)
{
    console.log(person[key])
}