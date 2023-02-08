var price =6000
//if else
if(price>=1000)
{
    console.log("free delivery")
}
else
{
    console.log("delivery charges applied")
}

//else if

if(price>=1000 && price<5000)
{
    console.log("free delivery")
}
else if(price>=5000)
{
    console.log("free delivery and 10% off")
}
else
{
    console.log("delivery charges applied")
}

//switch
switch (price)
{
    case 500:
        console.log("delivery charges applied")
        break
    case 1000:
        console.log("free delivery")
        break
    case 2000:
        console.log("free delivery")
        break
    case 3000:
        console.log("free delivery")
        break
    case 6000:
         console.log("free delivery and 10% off")
         break
    default:
        console.log("NOT SURE")
}





var num=11
if(num%2==0)
{
    console.log(num+" is even")
}
else
{
    console.log(num+" is odd")
}