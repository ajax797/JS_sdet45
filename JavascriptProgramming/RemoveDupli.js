// var arr=[1,2,5,4,1,4,4]
// for (let index = 0; index < arr.length; index++) 
// {
//     for (let index1 = index+1; index1 < arr.length; index1++) 
//     {
//         if(arr[index]==arr[index1])
//         {
//             arr[index1]=9999
//         }
//     }

// }
// for (let index = 0; index < arr.length; index++) 
// {
//     if(arr[index]!=9999)
//     {
//         console.log(arr[index])
//     }
// }

// print unique elements in an array
var arr=[1,2,5,4,1,4,4]
var arr1=[]
for (let i = 0; i < arr.length; i++) 
{
    var count=0
    for (let j = 0; j < arr.length; j++) 
    {
        if (arr[i]==arr[j]) 
        {
            if(j<i)
            {
                break
            }
            count++
        }
        
    }
    if (count>=1) 
    {
        arr1.push(arr[i])
    }
    
}
console.log(arr1);