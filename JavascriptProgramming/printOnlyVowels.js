var str='testyantra'
for (const key in str) 
{
    let count=0
    for (const key1 in str) 
    {
        if (str[key]==str[key1]) 
        {
            if (key>key1) 
            {
                break
            }
            count++
        }
    }
    if(count>=1)
    {
        if('aeiouAEIOU'.includes(str[key]))
        {
             console.log(str[key]+"---->"+count)
        }
    }
}