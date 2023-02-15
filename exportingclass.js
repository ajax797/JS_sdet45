class clnm
{
    a=10
    mtnm1()
    {
        console.log('method 1');
    }
    static mtnm2()
    {
        console.log('method 2');
    }

}
var obj1=new clnm()
obj1.mtnm1()
clnm.mtnm2()

//module.exports=obj1
module.exports=clnm