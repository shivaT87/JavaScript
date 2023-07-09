//reduce filter map
//add array elements using reduce method

let marks = [10,20,30,40,50]

let totalmarks=marks.reduce((sum,mark)=>sum+mark,0) //In this first element sum is accumlator and 2nd element is mark is iterates each element from the array

console.log(totalmarks)

//retrieve only even number from the array

let arr=[10,25,30,47,99,80]
let evenarr =[]

for (i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        evenarr.push(arr[i])
    }
}
console.log(evenarr)


//filter map
//same above code can be written using filter map

let filterevenarr=arr.filter(num=>num%2==0)
console.log(filterevenarr)


//mutiple the filterevenarr elment with 3
//filterevenarr [10,30,80]
//mappedArray output should be [30,90,240]
let mappedArray=filterevenarr.map(mul=>mul*3)
console.log(mappedArray)

//Now sum up the mappedArray
let SumArray=mappedArray.reduce((sum,element)=>sum+element,0)
console.log(SumArray)


//chaining the all the lines of code i.e: finding even number from array and multipling by 3 and then summing it
let Socre = [10,25,30,47,99,80]

let sumValue=Socre.filter(num=>num%2==0).map(num=>num*3).reduce((sum,total)=>sum+total)
console.log(sumValue)


//Sorting the array with strings
let fruits =['bannana','apple','orange',"watermelon"]
console.log(fruits.sort()) //ascending order sorting
console.log(fruits.reverse()) //descending order sorting

