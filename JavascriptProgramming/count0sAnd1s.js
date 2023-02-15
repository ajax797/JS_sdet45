var arr=[0,0,1,1,0,0,1,0,1]
var count=0
var count1=0
for (const i in arr) 
{
    if (arr[i]==0) 
    {
        count++
    }
    else if(arr[i]==1)
    {
        count1++
    }
    else
    {

    }
}
console.log(`Count of 0's ${count}`);
console.log(`Count of 1's ${count1}`);