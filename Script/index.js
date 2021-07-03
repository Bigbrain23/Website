function setProjects() {
    if (window.localStorage.getItem('lastOpen') === 'projects') return;
    document.querySelectorAll("#default > div:not(.navbar)").forEach(el => {
        el.style.opacity = 0;
    });
    setTimeout(function(){
        document.getElementById("default").style.display = 'none';
        document.getElementById("projects").style.display = 'grid';
        document.querySelector('title').textContent = "Projects - Vorlus";
        window.localStorage.setItem('lastOpen', 'projects');
        document.querySelectorAll("#projects > div:not(.navbar)").forEach(el => {
            el.style.opacity = 1;
        });
    }, 500);
}
function setDefault() {
    if (window.localStorage.getItem('lastOpen') === 'default') return;
    document.querySelectorAll("#projects > div:not(.navbar)").forEach(el => {
        el.style.opacity = 0;
    });
    setTimeout(function(){
        document.getElementById("default").style.display = 'grid';
        document.getElementById("projects").style.display = 'none';
        document.querySelector('title').textContent = "Vorlus - Home";
        window.localStorage.setItem('lastOpen', 'default');
        document.querySelectorAll("#default > div:not(.navbar)").forEach(el => {
            el.style.opacity = 1;
        });
    }, 500);
}
function prepare() {
    const lastOpen = localStorage.getItem("lastOpen");
    if (lastOpen === 'projects'){
        document.getElementById("default").style.display = 'none';
        document.getElementById("projects").style.display = 'grid';
    } else {
        document.getElementById("default").style.display = 'grid';
        document.getElementById("projects").style.display = 'none';
    }

}

// document.addEventListener('DOMContentLoaded', function(event) {
//     document.querySelector('body').style.opacity = 1;
// })