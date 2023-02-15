var input=[{fname:'abc',address:'India'},
            {fname:'def',address:'Europe'},
            {fname:'rst',address:'India'},
            {fname:'xyz',address:'Europe'},
            {fname:'mno',address:'Russia'}]

var count=0           
for (const i in input) 
{
    if (input[i].address=='India') 
    {
        count++
    }
}
console.log('People living in India --->'+count);

var cc=0
for (let i = 0; i < input.length; i++) 
{
    var count=0
    for (let j = 0; j < input.length; j++) 
    {
        if (input[i].address==input[j].address) 
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
        cc++ 
    }  
}
console.log('Number of countries --->'+cc);

var count1=0
for (let i = 0; i < input.length; i++) 
{
    
    for (let j = i+1; j < input.length; j++) 
    {
        if (input[i].address==input[j].address) 
        {
            count1++
        }
    }    
}
numb=input.length-count1
console.log('Number of countries --->'+numb);