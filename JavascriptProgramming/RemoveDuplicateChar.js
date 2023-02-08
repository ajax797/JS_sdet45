console.log(RemoveDuplicateCharacter('Testyantra'))


function RemoveDuplicateCharacter(str)
{
arr=str.split('')
for (let i = 0; i < arr.length; i++) 
{  
    for (let j = i+1; j < arr.length; j++) 
    {
        if(arr[i]==arr[j])
        {
            arr.splice(j,1)
        }    
    }
}
return arr.join('')
}