var a1=10   //global
let a2=20   //script
const a3=30 //script
console.log(a1);
console.log(a2);
console.log(a3);

{
    var a7=70   //global
    let a8=80   //block
    const a9=90 //block
    function addition(a1,a2) {
        let a3=a1+a2    //local
        console.log(a3);
        var a4=40       //local
        let a5=50       //local
        const a6=60     //local
        console.log(a4);
        console.log(a5);
        console.log(a6);
    }
    addition(100,200)
    console.log(a7);
    console.log(a8);
    console.log(a9);
}