var arr=[2,3,4,7,9,12,34,56,76,35,47,3]
for (const i in arr) 
{
    if (arr[i]%2==0) 
    {
       console.log(arr[i]+' is an even number');
    }
    else if (arr[i]%2==1) 
    {
       console.log(arr[i]+' is an odd number');
    }
    else{}
}
