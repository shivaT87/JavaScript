const prompt=require("prompt-sync")({sigint:true});

let number=prompt("Enter the number for fabinacci series print ")
let n1=0,n2=1,n3,i
console.log(n1)
console.log(n2)
for(i=2;i<number;i++){
    
    n3=n1+n2
    console.log(n3)
    n1=n2
    n2=n3
}