// console.log(a);   //undefined
// var a 
// a = 100;
// var a =200
// console.log(a);   //200

//

// console.log(x);  //undefined  ===========X
//     var x 
//     x = 20
//     let x = 35    //SyntaxError:Identifier 'x' has already been declared
//     x = 95              
//     console.log(x);   //95



// const y = 3.1415;
    
//     function fun1() {
//         console.log("local");
//     }
//     y = 3;                  
//     console.log(y);    //Type Error:assignment to constant variable



// {
//         var b = "Anupraj"
//         let w = "welcome"
//     }
//     	console.log(b);	//Rekha
//     	console.log(w);	//refference error 



// console.log(index);    //undefined    
//     for (var index = 0; index < 5; index++) {
//         console.log(index); //0 1 2 3 4
//     }                                                
//     console.log(index);    //5
   


// console.log(index);     //refference error 
//     for (let index = 0; index < 5; index++) {
//         console.log(index);          //0 1 2 3 4           
//     }
//  console.log(index);     //refference error   



// var a = 100;
//     console.log(a);   //100
//     {
//         var a = 200
//         console.log(a);  //200
//     }
//     console.log(a);   //200
   


// let x = 10
//     {
//         let x = 20
//     }
//     console.log(x);   //10
    


// var a = 20  //============X
//     let a = 30   //SyntaxError:Identifier 'a' has already been declared
//     console.log(a);  //30


const a=10
{
    const a=20
    console.log(a);
}
console.log(a);
    
   