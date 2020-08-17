function menutoggle(){
    var x=document.getElementById("menu");
    var y=document.getElementById("toggle");
    if(x.classList.contains("closed"))
    {
    x.classList.remove("closed");
    x.classList.add("open");
    y.innerHTML="menu_open";
    }
    else{
        x.classList.remove("open");
        x.classList.add("closed");
        y.innerHTML="menu";
    }
}
var i=0;
var q=["Traveling – it leaves you speechless, then turns you into a storyteller","It is better to travel well than to arrive","Travel makes one modest, you see what a tiny place you occupy in the world","Life is short and the world is wide","Travel is the only thing you buy that makes you richer"];
var s=["url(images/img1.jpg)","url(images/img2.jpg)","url(images/img3.jpg)","url(images/img4.jpg)","url(images/img5.jpg)"];
function showcase()
{
    document.getElementById("showcase").style.backgroundImage=s[i];
    document.getElementById("quote").innerHTML=q[i];
    i++;
    if(i==5)
       i=0;

}
setInterval(showcase,3000);
function openIt(id){
    var x=document.getElementById("popupbox");
    document.querySelector(".modalhead > h4").innerHTML=id;
    document.querySelector(".form > button").innerHTML=id;
    if(x.classList.contains("popdown")){
        x.classList.remove("popdown");
        x.classList.add("popup");
    }
}
function closeIt(id){
    var x=document.getElementById(id);
    if(x.classList.contains("popup")){
        x.classList.remove("popup");
        x.classList.add("popdown");    
    }
}
function calert(text){
    var x=document.getElementById("alerts");
    x.classList.remove("popdown");
    x.classList.add("popup");
    document.querySelector(".alertbox > h4").innerHTML=text;
}
function okey(){
    var x=document.getElementById("alerts");
    x.classList.remove("popup");
    x.classList.add("popdown");
}
function validate(){
    var u=document.getElementById("username").value;
    var p=document.getElementById("pass").value;
    console.log(u);
    if(u==''&& p=='')
        calert("Hey you have got a blank username and password!!");
    else if(u=="")
        calert("Hey you have got a blank username!!");
    else if(p=="")
        calert("Hey you have got a blank password!!");
    else if(p.length<8)
       calert("password must contain atleast 8 characters");
    else if(u=="admin" && p=="12345678"){
        calert("Welcome");
        closeIt("popupbox");
        loggedIn();
    }
    else if(p!="12345678")
        calert("sorry");
}
function loggedIn(){
    var i=document.getElementById("in");
    var u=document.getElementById("up");
    var o=document.getElementById("out");
    if(i.classList.contains("popup"))
    {
        i.classList.remove("popup");
        u.classList.remove("popup");
        i.classList.add("popdown");
        u.classList.add("popdown");
        o.classList.remove("popdown");
        o.classList.add("popup");
    }
    else{
        i.classList.remove("popdown");
        i.classList.add("popup"); 
        u.classList.remove("popdown");
        u.classList.add("popup");
        o.classList.remove("popup");
        o.classList.add("popdown");
        calert("logged out")
    }
}
