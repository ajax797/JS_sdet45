// function fn(){ a=5
// console.log(typeof( a));
// // var a=5
// // console.log(a);
// }
// fn()
// console.log(a);
var ob1=
{
    pr1:1,
    pr2:2,
    pr3:3
}
console.log(ob1);
var ob2=Object.create(ob1)
console.log(ob2);
console.log(ob2.pr1);
console.log(ob2.pr2);
console.log(ob2.pr3);
ob2.pr1=10
ob2.pr2=20
ob2.pr3=30
ob2.pr4=40
console.log(ob2);
console.log(ob1.pr4);