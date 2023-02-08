var arr=[1,2,3,4,5,6,7,8,9,10,11]
var arr1=[6,7,8,9,0]
console.log(arr);

console.log(arr.length);//1

arr3=arr.concat(arr1)//2
console.log(arr3);

console.log(arr.lastIndexOf(3))//3

console.log( arr.join(''))//4
a=arr.join('')
console.log(typeof(a));

console.log(arr.push(6,7,8))//5
console.log(arr);

console.log(arr.pop());//6
console.log(arr);

console.log(arr.shift());//7
console.log(arr);

console.log(arr.unshift(0,1));//8
console.log(arr);

console.log(arr.includes(1));//9

function con(arr)
{
    return arr>3
}
console.log(arr.find(con));//10
console.log(arr.filter(con));//11
console.log(arr);
console.log(arr1);

console.log(arr.sort((a,b)=>(a-b)))//12
console.log(arr.sort((a,b)=>{return b-a}))//13
console.log(arr)

console.log(arr.toString())//14

console.log(arr.slice(2));//15
console.log(arr.slice(1,4));
console.log(arr);

console.log(arr.reverse());//16

console.log(arr.splice(3,1,6,5));//17
console.log(arr);

console.log(arr.findIndex(1));//18

for (const i of arr.entries()) //19
{
    console.log(i)
}

arr.forEach(fn)//20
function fn(i)
{
    console.log(i=i+5);
}
console.log(arr);


function fn(total,value,index,array)
{
    console.log(total);
    return value*total
}
console.log(arr.reduce(fn));

console.log(arr.copyWithin(0,8))//21
var str=new String()
console.log(str.valueOf())












