//map,filter and reduce
//What is map()?

const nums = [1,2,3,4]

const multiplyThree = nums.map((num,i,arr)=>{
    return num * 3
})

console.log(multiplyThree);

//What is filter()?
const numbers = [1,2,3,4,5]

const moreThanTwo = numbers.filter((number)=>{
    return number >2
})

console.log(moreThanTwo);


//What is reduce?

const sums =[1,2,3,4,5]

const sum = sums.reduce((acc,curr,i,arr)=>{
    return acc + curr
},0)

console.log(sum);

//Pollyfill for map()