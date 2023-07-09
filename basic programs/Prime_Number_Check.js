const prompt=require("prompt-sync")({sigint:true});

let n=parseInt(prompt("Enter a number to verify prime number or not "))
console.log(n)
console.log(typeof(n))
let m,i=0,flag=0
m=n/2
console.log(m)
console.log(typeof(m))
for(i=2;i<=m;i++){
    if(n%i==0){
        
        console.log(n+' is not a prime number')
        flag=1
        break
    }
}

if(flag==0){
    console.log(n +' is a prime number')
}