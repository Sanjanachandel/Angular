let menuBtn=document.getElementById("menuBtn");
let menu=document.getElementById("menu");

menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("active");
});

let cookieBtn=document.getElementById("acceptCookies");

cookieBtn.addEventListener("click",()=>{
    document.querySelector(".cookie-bar").style.display="none";
});

window.addEventListener("scroll",()=>{
    let navbar=document.getElementById("navbar");
    if(window.scrollY>50){
        navbar.style.boxShadow="0 2px 8px rgba(0,0,0,0.2)";
    }else{
        navbar.style.boxShadow="none";
    }
}); 