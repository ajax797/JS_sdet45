// var str='testyantra'
// var count=0
// var count1=0
// for (const key in str) 
// {
//     if(str[key]=='a'||str[key]=='e'||str[key]=='i'||str[key]=='o'||str[key]=='u')
//     {
//         count++
//     }
//     else
//     {
//         count1++
//     }
    
// }
// console.log("Vowels ---->"+count);
// console.log("Consonants ----->"+count1);


occuranceOfChar('Testyantra')


function occuranceOfChar(str)
{
    arr=str.toLowerCase().split('')
    for(let i=0;i<arr.length;i++)
    {
        let count=0
        for(let j=0;j<arr.length-1;j++)
        {
            if(arr[i]==arr[j])
            {
                if(i>j)
                {
                    break
                }
            count++
            }
        }
        if(count>=1)
        {
            if(arr[i]!='a'&&arr[i]!='e'&&arr[i]!='i'&&arr[i]!='o'&&arr[i]!='u')
            {
                console.log(arr[i]+'---->'+count)
            }
        }
    }
}

