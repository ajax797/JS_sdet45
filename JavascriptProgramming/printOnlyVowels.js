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
        if(str[key]=='a'||str[key]=='e'||str[key]=='i'||str[key]=='o'||str[key]=='u')
        {
             console.log(str[key]+"---->"+count)
        }
    }
}