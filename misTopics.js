// //converting JSON file to JS object
// file='{"name":"ajax","password":1234}'
// obj=JSON.parse(file)
// console.log(obj.name);

// //diff b/w equal operator'==' and strictly equal to operator '==='
// var x=1
// var y='1'
// if (x===y) 
// {
//     console.log("datatype and value is matching");
// } else if(x==y)
// {
//     console.log("datatype not matching but value is matching");
// }


//diff b/w break and continue
var ar=[1,2,3,4,5,6,7]
for (const i in ar) 
{
    if (ar[i]==4) 
    {
        //break     //breaks the entire loop
        continue    //skips the perticular element 
    }
    console.log(ar[i]);
}