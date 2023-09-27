const pointer = document.getElementById("projectsPointer");
let circle = document.getElementById('projectsPointer');
const pos=document.getElementById("projects").getBoundingClientRect()

document.addEventListener('mousemove', function(e) {
    let left = e.clientX - pos.x;
    let top = e.clientY - pos.y;
    circle.style.left = left + 'px';
    circle.style.top = top + 'px';
});