// var productDetails={
//     productName:"Galaxy S22 ultra",
//     brand:"Samsung",
//     price:10000,
//     productRating:5,
//     description:['8gbRam','256gbStorage','5000mAhBattery'],
//     DisplayDetails:display={
//         size:"6.6''",
//         resolution:1080,
//         refreshRate:'120Hz'
//     },
//     purchase: function()
//     {
//         var status="The product is delivered"
//         console.log(status);

//     }
// }
// console.log(productDetails);

// for (var m of productDetails.description) {
//     console.log(m);
// }

// for (const key in productDetails) {
//     if (Object.hasOwnProperty.call(productDetails, key)) {
//         const element = productDetails[key];
//         console.log(element);
//     }
// }
// console.log(productDetails);
// console.log(productDetails.productName);
// console.log(productDetails.price);
// console.log(productDetails.description);
// console.log(productDetails.DisplayDetails.size);
// console.log(productDetails.DisplayDetails.refreshRate);
// productDetails.purchase();


//type 2
function prodDet(name,brand,price,description='na',purchase)
{
    this.name=name
    this.brand=brand
    this.price=price
    this.description=description
    this.purchase=purchase
    console.log("product "+name+" is of brand "+brand+" and price is "+price);
}

var prod1=new prodDet("s22",'samsung',10000,['8gbRam','256gbStorage','5000mAhBattery'],function(){ var status="The product is delivered"
console.log(status);})
var prod2=new prodDet('4a','google',8000)
console.log(prod1);
console.log(prod1.description[1]);
prod1.purchase();
console.log(prod2);

// //type 3
// var prodDet= new Object()
// prodDet.productName="S22"
// prodDet.Company='Samsung'
// prodDet.price=10000
// prodDet.description=['256gb','5000mAh']

// console.log(prodDet);

// //Adding property to the existing object
// productDetails.deliveryFee=100
// console.log(productDetails);

// //Modifying property in the existing object
// productDetails.price=15000

// //Deleting property to the existing object
// delete productDetails.productRating
// console.log(productDetails);

// Type 4

// class ProductDetail
// {
//     constructor(pName,price)
//     {
//         this.pName=pName
//         this.price=price
//     }   
// }
// var data1=new ProductDetail('Samsung',10000)
// var data2=new ProductDetail('google',10000)
// console.log(data1);
// console.log(data1.pName);
// console.log(data2.pName);


// class productDetails
// {
// 	constructor(name,price)
// 	{
// 		this.name=name
// 		this.price=price
// 	}
// }

// var p1=new productDetails('book',10)
// var p1=new productDetails('book',100)
// console.log(p1);

