function reverseString(str){
    console.log("The given string is "+str)
    let splitarray=str.split("")
    //console.log(splitarray)
    let reversearray=splitarray.reverse()
    let joinarray=reversearray.join("")

    //We can club it entire code into single line by chianing
    //return str.split("").reverse().join("")
    
    return joinarray
    
    
}

console.log("The reverse of given string is "+reverseString('Shiva'))

//2nd way of reversing the string
let str="madam"
let newstr=""
for(i=str.length-1;i>=0;i--){
    newstr+=str[i]
}
console.log("Reverse string is "+newstr)

if (str==newstr){
    console.log("Given STRING is Palindrom")
}
else{
    console.log("Given STRING is Not a Palindrom")
}