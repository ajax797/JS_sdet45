var arr=[3,4,6,8,7,5]
var odd=[]
var even=[]
for (const i in arr) 
{
    if (arr[i]%2==1) 
    {
         odd.push(arr[i])
    }
    else if (arr[i]%2==0) 
    {
         even.push(arr[i])
    }
}
console.log(odd);
console.log(even);
