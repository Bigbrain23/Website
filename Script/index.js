function setProjects() {
    document.getElementById("default").style.display = 'none';
    document.getElementById("projects").style.display = 'grid';
    window.localStorage.setItem('lastOpen', 'projects');
}
function setDefault() {
    document.getElementById("default").style.display = 'grid';
    document.getElementById("projects").style.display = 'none';
    window.localStorage.setItem('lastOpen', 'default');
}
function prepare() {
    const lastOpen = localStorage.getItem("lastOpen");
    if (lastOpen === 'projects'){
        setProjects()
    } else {
        setDefault()
    }

}