/* typing animation  */
var typed = new Typed(".typing",{
    strings:["","web Designer", "Web Developer", "Graphic Designer", "Youtuber", "Influencer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



const navs=document.querySelector(".aside");
const menu=document.querySelectorAll(".aside .nav li");
var navd=document.getElementById("nav_responsive");
var v=false;
navd.onclick=()=>{
    if(!v)
    {
    navs.style.left="0px";
    v=true;
for (let index = 0; index < menu.length; index++) {
    
    menu[index].onclick=()=>{
        navs.style.left="-270px";
        v=false;
    }
}
   
    }
    else
    {
        navs.style.left="-270px";
        v=false;
    }
}


