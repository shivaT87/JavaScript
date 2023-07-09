//Basic If loop syntax
let flag=true
if(!flag)
{
    console.log("Condition Statisfied")
}
else{
    console.log("Condition Not Statisfied")
}


//Basic while loop sytax
let i=0
while(i<10)
{
i++
console.log(i)
}

let required=true
while(required){
    console.log("successfully " + required)
    required=false
}

//Basic do while loop
let j=0
do{
j++
 console.log("Inside the do loop")
}
while(j=0){
    console.log(j)
console.log("Inside do while lopp")
}


//Basics of for loop

for(let k=0;k<10;k++){
    console.log(k)
}


//Basic for loop with AND and OR and break conditions

let n=0

for(let m=1;m<=100;m++){
    if(m%2==0 && m%5==0){
        console.log("----------------------")
        console.log(m)
        if(n==3)
        break
    }
}