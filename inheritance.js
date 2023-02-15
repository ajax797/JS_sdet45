class payment
{
    constructor(pname)
    {
        this.pname=pname
    }
    
    Status()
    {
        console.log('Payment successfull');
    }
}
class COD extends payment
{
    mode()
    {
        console.log('cash on delivery');
    }
}
class netBanking extends payment
{
    mode()
    {
        console.log('Net banking');
    }
}
class card extends payment
{
    mode()
    {
        console.log('Credit/Debit card');
    }
}
var p1=new COD('pen')
console.log(p1.pname);
p1.mode()
p1.Status()
var p2=new netBanking()
console.log(p2.pname);
p2.mode()
p2.Status()
var p3=new card()
p3.mode()
p3.Status()