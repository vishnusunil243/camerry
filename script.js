const headerEl=document.querySelector(".navbar");
const toggleEl=document.querySelector("#navbarSupportedContent");


window.addEventListener("scroll",()=>{
if(window.scrollY>50){
    headerEl.classList.add("navbar-scrolled");
    toggleEl.classList.add("navbar-scrolled");
}else if(window.scrollY<=50){
    headerEl.classList.remove("navbar-scrolled");
    toggleEl.classList.remove("navbar-scrolled");
}
});