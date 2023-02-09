"use Strict";
class className
{
    _var1=10
    $var2=20
    get Var1()
    {
        return this.var1
    }
}

var obj=new className()
console.log('1---->'+obj._var1);
obj._var1=30
console.log('2---->'+obj._var1);

console.log('3---->'+obj.$var2);
obj.$var2=40
console.log('4---->'+obj.$var2);
