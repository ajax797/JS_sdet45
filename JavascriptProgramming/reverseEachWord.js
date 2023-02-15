var st="I am an employee of TestYantra"
// arr=st.split(' ')
// var rev=''
// for (const i in arr) 
// {
//     rev=rev+' '+arr[i].split('').reverse().join('')
// }
// console.log(rev);

console.log(st.split(' ').map(w=>w.split('').reverse().join('')).join(' '));
