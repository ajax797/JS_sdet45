// var product1=
// {
//     productName:"Galaxy S22 ultra",
//     brand:"Samsung",
//     price:10000,
//     productRating:5,
//     purchase: function(status)
//     {
//         console.log(this.brand+' '+this.productName+" delivery is "+status);

//     }
// }

// var product2=
// {
//     productName:"Galaxy S22",
//     brand:"Samsung",
//     price:50000,
//     productRating:4,
//     order: function()
//     {
//         var status=this.brand+' '+this.productName+" order has been placed"
//         console.log(status);

//     }
// }
// //call
// product2.order.call(product1) //borrowed function

// product1.purchase.call(product2,'Successfull')  //borrowed function

// //bind
// var updates=product1.purchase.bind(product2,'Failed')
// updates()

// //apply
// product1.purchase.apply(product2,['Pending'])


var prod1=
{	pname:'pen',
	price:10,
	order: function(status)
	{
		console.log(this.pname+' delivery is '+status)
	}
}

var prod2=
{
	pname:'mobile',
	price:12000
}
//call()
//-----------
prod1.order.call(prod2,'failed')

//bind()
//------------
var p1=prod1.order.bind(prod2,'Pending')
p1()