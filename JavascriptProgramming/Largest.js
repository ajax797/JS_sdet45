var arr=[1,2,5,4,1,4,4]
var large=arr[0]
 for (let index = 0; index < arr.length; index++) 
 {
    if(arr[index]>large)
    {
        large=arr[index]
    }

 }    
 console.log(large)