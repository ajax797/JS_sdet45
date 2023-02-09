document.getElementById("greet").innerHTML="Happy Shopping to All!!!!"
document.getElementById("status").innerHTML="Keep Shopping !!!!"
document.getElementById("button").onclick=click1
function click1()
{
    document.getElementById("button").innerHTML="Clicked"
}
document.getElementById("time").onclick=displayTime
function displayTime()
{
    a=Date().toString().split(' ')
    a.splice(5)
    document.getElementById("timeDisplay").innerHTML=a.join(' ')//Date()
}
document.getElementById("login").onclick=home
function home()
{
    document.getElementById("home").click()
}