let str='tuesday '
console.log(str.length) //8
console.log(str[1]) //u
let str1=str.slice(1,4) 
console.log(str1) //tuesd

// we want to split above word as tue day
let splitstr=str.split('s') // after split java string stores in the array format
console.log(splitstr[0])
console.log(splitstr[1])

console.log(splitstr[1].length) //including spaces length will be 4
console.log(splitstr[1].trim().length) //after removing the spaces length will be 3

//conversion from string to number and vice versa

let Currentdate= '25'
let Nextdate='27'
let diff= parseInt(Nextdate)-parseInt(Currentdate)
console.log(diff)
console.log(typeof(diff))
let strdiff=diff.toString()
console.log(typeof(strdiff))


//Count the number of occurance of day word in the below sentance

let Newquote= 'Friday is always funday because next day is Saturday'

let count=0
let value=Newquote.indexOf('day')//3
while(value!==-1)
{
    count++
    value=Newquote.indexOf('day',value+1)
}

console.log("The total number of occurance of day word is "+count)