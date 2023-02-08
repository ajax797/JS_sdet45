// var arr=[1,2,5,4,1,4,4]
// var t
// for (let index = 0; index < arr.length-1; index++) 
// {
//     for (let index1 = 0; index1 < arr.length-1; index1++) 
//     {
//         if(arr[index1]>arr[index1+1])
//         {
//             t=arr[index1]
//             arr[index1]=arr[index1+1]
//             arr[index1+1]=t
//         }
//     }  
   
// }
// console.log(arr)

var arr=[2,5,1,5,6,3]
for(let i=0;i<arr.length;i++)
{
	for(let j=0;j<arr.length-1;j++)
	{
		if(arr[j]>arr[j+1])
		{
			let t=arr[j]
			arr[j]=arr[j+1]
			arr[j+1]=t
		}
	}
}
for(let i=0;i<arr.length;i++)
{
	console.log(arr[i])
}