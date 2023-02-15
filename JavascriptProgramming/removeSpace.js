var st="I am an employee of TestYantra"
console.log(st.replaceAll(' ',''));


arr=st.split('')
for (const i in arr) 
{
    if (arr[i]==' ') 
    {
        arr[i]=''
    }
}
console.log(arr.join(''));