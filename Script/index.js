function setProjects() {
    document.getElementById("default").style.display = 'none';
    document.getElementById("projects").style.display = 'flex';
}
function setDefault() {
    document.getElementById("default").style.display = 'flex';
    document.getElementById("projects").style.display = 'none';
}
function prepare() {
    window.localStorage.setItem('name', 'Kristoffer');
}