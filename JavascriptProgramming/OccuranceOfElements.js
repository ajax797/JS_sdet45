var arr=[1,2,5,4,1,4,4]
for (let index = 0; index < arr.length; index++) 
{
    let count=0
    for (let index1 = 0; index1 < arr.length; index1++) 
    {
        if(arr[index]==arr[index1])
        {
            if(index1<index)
            {
                break
            }
            count++
        }
    }  
    if(count>=1)
        {
            console.log(arr[index]+"--->"+count)
        }
}