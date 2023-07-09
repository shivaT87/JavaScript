//Array declartion

var marks1 = new Array(6)
var marks1 = new Array(20,30,45,50,60,70)

let marks = [20,30,45,50,60,70]
console.log(marks[2]) //45
marks[3]=100
console.log(marks) //[20,30,45,100,60,70]
console.log(marks.length) //6
marks.push(200) //adds 200 at the end of the array
console.log(marks)//[20,30,45,100,60,70,200]
marks.pop() //removes last element 200 from the array
console.log(marks)//[20,30,45,100,60,70]
console.log(marks.indexOf(100)) //shows the index position of 100
console.log(marks.includes(45)) //true //it searches the given value in the array
console.log(marks.includes(145)) //false //it searches the given value in the array
marks.unshift(12)
console.log(marks)

//sum all the array numbers
let sum=0
for(i=0;i<marks.length;i++){
    sum=sum+marks[i]
}

console.log("The sum value of the Array marks is "+sum)