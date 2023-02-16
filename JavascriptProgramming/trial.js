// aaaar=[1,2,3,,4,5,6,7]
// var i=0
// for(;;)
// {
//     if(arr[i]==undefined)
//     {
//         i++
//         break
//     }
//     else
//     {
//         i++
//     }
// }
// console.log(i);
// var a=undefined
// console.log(a);
// console.log(aaaar.length);
// var a=0
// for (const aaa in aaaar) 
// {
//     a++
// }
// console.log(a);
// var aa=0
// for (const aaaa of aaaar) 
// {
//     aa++
// }
// console.log(aa);

// aaaar.forEach(element => {
//     element
// });


// var a=10
// var b=20
// var c='30'
// console.log(a+b+c);

// const friuts=["mango","apple"]
// console.log(friuts.length);
// console.log(friuts[0]);

// (function fn() 
// {
//     a=b=c=d=5
//     console.log(b);
// })
// ()
// console.log(b);


//print the consonants present in the string and the respective occurance

// var st="javascript"

// for(const i in st)
// {
// 	var count=0
// 	for(const j in st)
// 	{
// 		if(st[i]==st[j])
// 		{
// 			if(i>j)
// 			{
// 				break
// 			}
// 		count++
// 		}
// 	}
// 	if(count>=1)
// 	{
// 		if(st[i]!='a'&&st[i]!='e'&&st[i]!='i'&&st[i]!='o'&&st[i]!='u')
// 		{
// 			console.log(st[i]+'----->'+count)
// 		}
// 	}
// }

// // Caps all first letter
// var st='i am testyantra Employee'
// var arr=st.split(' ').map((v)=>(v.split('')[0].toUpperCase()+v.slice(1))).join(' ')
// console.log(arr);

//to get 3rd letter from each word
// var arr=['javascript','selenium','api','cypresss']
// console.log(arr.map((w)=>w.charAt(2)).toString());

//caps 1st letter if 3rd letter is vowel
// var st='good morning welcome to javascript session'
// var arr=st.split(' ').map((v)=>{
//     if('aeiouAEIOU'.includes(v.charAt(2))&&v.length>2)
//     {
//     return v.split('')[0].toUpperCase()+v.slice(1)
//     }
//     else
//     {
//         return v
//     }
//     })
// console.log(arr.join(' '));

// //from string store all vowels in array
// var st='testyantra'
// var arr=[]
// st.toLowerCase().split('').forEach((v)=>{
//     if("aeiou".includes(v))
//     {
//         arr.push(v)
//     }
// })
// console.log(arr);

//if we pass any value and it is mutiple 0f 5 & 10
// var value=105

// function multiple(value)
// {
// 	if(value%5==0&&value%10==0)
// 	{
// 		console.log(value+' divisible by 5&10')
// 	}
//     else if(value%5==0)
//     {
//         console.log(value+' divisible by 5');
//     }
//     else
//     {

//     }
// }
// multiple(value)

//vowels in uppercase
var st='good morning'
var arr=st.split('').map((v)=>{
	if('aeiouAEIOU'.includes(v))
	{
		return v.toUpperCase()	
	}
	else
	{
		return v
	}	

})
console.log(arr.join(''))













