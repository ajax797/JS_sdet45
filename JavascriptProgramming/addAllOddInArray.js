var arr=[2,3,4,7,9,12,34,56,76,35,47,3]
var sum=0
for (const i in arr) 
{
    if (arr[i]%2==1) 
    {
        sum=sum+arr[i]   
    }
}
console.log(sum);