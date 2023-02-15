var f1=0
var f2=1
console.log(f1);
console.log(f2);
for (let i = 0; i < 15; i++) 
{
    f3=f2+f1
    f1=f2
    f2=f3
    console.log(f3);
}