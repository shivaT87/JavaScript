const prompt=require("prompt-sync")({sigint:true});

let number=parseInt(prompt("Enter the number to check palindrome "))

let reverse=0,sum=0,temp
temp=number
console.log(temp)
console.log(typeof(temp))
while(number>0){
    reverse=number%10
    number=parseInt(number/10)
    sum=(sum*10)+reverse
    
}
if(temp==sum){
    console.log(temp +' is palindrome')
}
else{
    console.log(temp +' is not a palindrome')
}