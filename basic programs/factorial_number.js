const prompt=require("prompt-sync")({sigint:true});

let number = prompt('Enter number for factorial calculation: ')
if(number<0){
    console.log("Its negative number, please enter positive number")
}
else if(number==0){
    console.log("Please enter other than zero")
}
else{
 let fact=1
console.log(number)
for (i=1;i<=number;i++){

    fact=fact*i

}
console.log("Then factorial of "+ number + " is "+ fact)
}


