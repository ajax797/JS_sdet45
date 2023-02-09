var productDetails={
        productName:"Galaxy S22 ultra",
        brand:"Samsung",
        price:10000,
        productRating:5,
        description:['8gbRam','256gbStorage','5000mAhBattery'],
        DisplayDetails:display={
            size:"6.6''",
            resolution:1080,
            refreshRate:'120Hz'
        },
        purchase: function()
        {
            var status=this.productName+" is delivered"
            console.log(status);
    
        }
    }
console.log(productDetails);
console.log(productDetails.productName);
var prod2=Object.create(productDetails) //create a copy of same Object and Address will be stored in ref_var
console.log(prod2.productName);
prod2.productName='S22'
console.log(prod2.productName);
console.log(productDetails.productName);

productDetails.purchase()
prod2.purchase()
