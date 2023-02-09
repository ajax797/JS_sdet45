function order(productName,quantity=1)
{
    console.log('order has been placed for '+productName+' and quantity is '+quantity);
}
order('S22')
order('pen',6)
console.log();
function productAvailability(pName,status='In stock') 
{
    console.log(pName+' is '+status);
}
productAvailability('pencil')
productAvailability('pen','out of stock')
productAvailability('rubber','discontinued')
