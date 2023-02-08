var str='testyantra'
var str1='';
for (const key in str) 
{
    if (str[key]!='a'&&str[key]!='e'&&str[key]!='i'&&str[key]!='o'&&str[key]!='u') 
    {
        str1= str1+str[key]
    }  
}
console.log(str1)