async function sync() 
{
    console.log('1');
    var p=new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            resolve('In progress')
            reject('rejected')
        },3000)
    })
    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg)})
    console.log(2);
}
sync()
console.log(3);