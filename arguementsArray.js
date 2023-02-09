class data
{
    #prodid=100
    get prodId()
    {
        return this.#prodid
    }

}
var d1=new data()
var productDetails=function(name, price,pid=d1.prodId,brand='camlin')
{
    console.log("price of "+brand+' '+name+" is "+price+'====>'+pid)
    console.log(arguments);//===========>>>passed arguements will be stored in arguement array and fetched from it
    console.log(arguments[4]);
    console.log();
    return a=10
}
productDetails("pen", 10,99,'camlin',1000)
productDetails("pencil", 5,undefined,'apsara')


console.log(typeof(productDetails));
console.log(a);

