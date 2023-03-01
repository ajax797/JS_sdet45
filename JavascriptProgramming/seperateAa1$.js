var st='AxB1#*45eZ820'
var arr=st.split('')

var uppercase=''
var lowercase=''
var number=''
var specialcharacter=''
var x=0;
for (let key = 0; key < arr.length; key++) 
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
        if(x==key)
        {
            number=number+arr[key]
        }
        else
        {
            number=number+' '+arr[key]
        }
        x=key+1

    }
    else
    {
        specialcharacter=specialcharacter+arr[key]
    }
}


console.log(`uppercase--->${uppercase}`);
console.log(`lowercase--->${lowercase}`);
console.log(`number--->${number.trim()}`);
console.log(`specialcharacter--->${specialcharacter}`);

let num=number.trim().split(' ')
let sum=0
for (let i = 0; i < num.length; i++) 
{
    n=Number(num[i])
    sum=sum+n
}

console.log('sum---->'+sum);