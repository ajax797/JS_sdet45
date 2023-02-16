var importedClass=require("./inheritanceJStojs")
console.log(importedClass);
class COD extends importedClass
{
    mode()
    {
        console.log('cash on delivery');
    }
}
class netBanking extends importedClass
{
    mode()
    {
        console.log('Net banking');
    }
}
class card extends importedClass
{
    mode()
    {
        console.log('Credit/Debit card');
    }
}

var p3=new card()
p3.mode()
p3.Status()

