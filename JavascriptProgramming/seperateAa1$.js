var st='AxB1#*eZ8'
var arr=st.split('')

var uppercase=''
var lowercase=''
var number=''
var specialcharacter=''
for (const key in arr) 
{
    if (arr[key]>='A'&&arr[key]<='Z') 
    {
        uppercase=uppercase+arr[key]
    }
    else if(arr[key]>='a'&&arr[key]<='z')
    {
        lowercase=lowercase+arr[key]
    }
    else if(arr[key]>='0'&&arr[key]<='9')
    {
        number=number+arr[key]
    }
    else
    {
        specialcharacter=specialcharacter+arr[key]
    }
}
console.log(`uppercase--->${uppercase}`);
console.log(`lowercase--->${lowercase}`);
console.log(`number--->${number}`);
console.log(`specialcharacter--->${specialcharacter}`);