const pointer = document.getElementById("projectsPointer");

document.getElementById("projects").addEventListener("mousemove", e=>{
    offset = pointer.style.width / 2;
    pointer.style.left = e.offsetX-offset+"px";
    pointer.style.top = e.offsetY-offset+"px";
})