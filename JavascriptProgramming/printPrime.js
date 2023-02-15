var arr=[2,3,4,7,9,12,34,56,76,35,47,3]
for (const i in arr) 
{
    var count =0
    for (let j=1; j<=arr[i]; j++)
    {
        if (arr[i]%j==0) 
        {
            count++
        }
    }
    if (count==2) 
    {
        console.log(arr[i]+' is prime');
    } 
    else 
    {
        console.log(arr[i]+' is not prime');
    }
    
}