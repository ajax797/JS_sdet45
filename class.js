class USER
{
    age=25
    static phno=9845198451


    constructor(fname,lname,username)
    {
        this.fname=fname
        this.lname=lname
        this.username=username
    }


    login()
    {
        console.log('non static method output');
        console.log(this.phno); //undefined (static variable in non static methods)
        console.log(this.age);  //25 (static variable in non static methods)

        var v=new USER()
        console.log(v.phno);   //undefined (static variable in non static methods)
        console.log(v.age);    //25 (static variable in non static methods)

        console.log(USER.phno); //9845198451 (static variable in non static methods)
        console.log(USER.age);  //undefined (static variable in non static methods)
        var stat='successfull'
        console.log(stat);
    }

    
    static logout()
    {
        console.log('static method output');

        console.log(this.phno); //9845198451 (static variable in static methods using this)
            console.log(this.age);  //undefined (non static variable in static methods using this)


        var v1=new USER()
            console.log(v1.phno);   //undefined  (static variable in static methods using obj reff)
        console.log(v1.age);    //25 (non static variable in static methods using obj reff)


        console.log(USER.phno); //9845198451 (static variable in static methods using class name)
            console.log(USER.age);  //undefined (non static variable in static methods using class name)

        console.log('logged out');
    }

}
var user1=new USER('ajax','lajax','ajax797')
console.log('non static variable '+user1.age);
console.log('static variable '+USER.phno);
user1.login();
USER.logout();
