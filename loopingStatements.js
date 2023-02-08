// //for loop
// var arr=[1,1.1,"java",'s',true,null]
// for (let i = 0; i < arr.length; i++)
// {
//     console.log(i+"  "+arr[i])
// }

// for (let index = arr.length-1; index >=0 ; index--) 
// {
//     console.log(index+"  "+arr[index])
// }


// var users=["abc" ,"def","ghi","jkl"]
// for (let index = 0; index < users.length; index++)
// {
//     if(users[index]==="abc")
//     {
//         console.log(users[index]+" is present")
//     }
    
// }


// //do while loop
// let inde=0
// do
// {
//     console.log(users[inde])
//     inde++
// }
// while(inde<users.length)


// //while loop
// let i=0
// while(i<arr.length)
// {
//     console.log(arr[i])
//     i++
// }


//for in
// var usernames=['abc','def','ghi','jkl']
// for (const index in usernames)
// {
//     console.log(index+"  "+usernames[index])
    
// }

//for of (index itself will fectch the value)
// var usernames=['abc','def','ghi','jkl']
// for (const index of usernames) 
// {
//     console.log(index)
// }

// //fectching each value
// var usernames=['abc','def','ghi','jkl']
// console.log(usernames[0])
// console.log(usernames[1])
// console.log(usernames[2])
// console.log(usernames[3])
// console.log(usernames[10])

//for-each Method
var usernames=['abc','def','ghi','jkl']
usernames.forEach((index)=>{
    console.log(index)
})

