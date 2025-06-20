
const bar =document.querySelector(".bar")
const menu_bar=document.querySelector(".navbar-menu .menu_bar")
bar.addEventListener("click",()=>(
  menu_bar.classList.toggle("show")
));
