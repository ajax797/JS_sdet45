var str="testyantra"
var str1=""
for (const key in str) 
{
    if (str[key]=="t") 
    {
        str1=str1+"T"
    }  
    else
    {
        str1=str1+str[key]
    }
}
console.log(str1)


console.log(str.replaceAll('t','T'))
