//this keyword points to the current object

var CategoryDetails=
{
    categoryName:'Electronics',
    subCategory:'Mobile',
    create:function(){ 
        console.log(this.categoryName+' is created');
        console.log(this.subCategory+' is created');
    }
}

var productDetails=
{
    productName:'S22',
    brand:'Samsung',
    insert:function() {
        console.log(this.categoryName+' Category is created');  //undefined
        console.log(this.subCategory+' Subcategory is created');    //undefined
        console.log(CategoryDetails.categoryName+' Category is created');
        console.log(CategoryDetails.subCategory+' Subcategory is created');  
        console.log(this.productName+' '+this.brand+' is inserted');       
    }
}
productDetails.insert()