//One function invoking another funtion is called as Callback function

// function addition(v1,v2)
// {
//     console.log('Sum is '+v1+v2);
// }
// function subtraction(v1,v2)
// {
//     console.log('Difference is '+v1-v2);
// }
// function multiplication(v1,v2)
// {
//     console.log('Product is '+v1*v2);
// }
// function division(v1,v2)
// {
//     if(v2!=0)
//     {
//         console.log('divided value is '+v1/v2);
//     }
//     else
//     {
//         console.log('Cannot be determined')
//     }
// }

// function calculate(v1,v2,operation)
// {
//     console.log('values are '+v1+', '+v2);
//     operation(v1,v2)
// }

// calculate(20,0,division)

function COD(cost)
{
    console.log('Payment of Rs.'+cost+' recieved via COD');
}
function netBanking(cost)
{
    console.log('Payment of Rs.'+cost+' recieved via Net Banking');
}
function card(cost)
{
    console.log('Payment of Rs.'+cost+' recieved via Card Payment');
}



function payment(cost,status,mode)
{
    switch (status) 
    {
        case 1:'successfull'
            console.log('Cost of the product is Rs.'+cost);
            mode(cost)
            break;
    
        default:
            console.log('payment failed');
            break;
    }
    
}

payment(10000,'successfull',netBanking)
