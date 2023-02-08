//Standard function
// function prodDet(name, price)
// {
//     console.log("price of "+name+" is "+price)
// }
// prodDet("mobile",10000)
// prodDet("Tab",15000)


// //Function Expression
var productDetails=function(name, price)
{
    console.log("price of "+name+" is "+price)
    console.log(arguments);//===========>>>passed arguements will be stored in arguement array and fetched from it
    console.log(arguments[3]);
    return a=10
}
productDetails("pen", 10,'sdd',1000)
productDetails("pencil", 5)
console.log(typeof(productDetails));
console.log(a);


// //Immediatly Invokable funtion ()() -- can be invoked only once and immediatly
// (function (name)
// {
//     console.log(name+" is the category name")
//     return a=10
// })
// ("Electronics")
// console.log(a)


// // //Arrow Function
// // CategoryDetails=(subname)=>{
// //     console.log(subname+" is the Subcategory name")
// // }
// // CategoryDetails("Mens")
// // CategoryDetails("Womens")
// // console.log(a)