var arr=[1,2,5,4,1,4,4]
for (let index = 0; index < arr.length; index++) 
{
    for (let index1 = index+1; index1 < arr.length; index1++) 
    {
        if(arr[index]==arr[index1])
        {
            arr[index1]=9999
        }
    }

}
for (let index = 0; index < arr.length; index++) 
{
    if(arr[index]!=9999)
    {
        console.log(arr[index])
    }
}