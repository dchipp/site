const toTop = document.getElementById("toTop");

document.addEventListener("scroll", scroll=>{
    if(window.scrollY >= 500){
        toTop.classList.add("toTop-show");
    } else {
        toTop.classList.remove("toTop-show");
    }
})

document.getElementById("toTop").addEventListener("click", element=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
});