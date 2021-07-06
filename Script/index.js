function setProjects() {
    if (window.localStorage.getItem('lastOpen') === 'projects') return;
    document.querySelector('#default').style.opacity = 0;
    document.querySelector('#projects').style.opacity = 0;
    setTimeout(function(){
        document.getElementById("default").style.display = 'none';
        document.getElementById("projects").style.display = 'grid';
        document.querySelector('title').textContent = "Vorlus - Projects";
        window.localStorage.setItem('lastOpen', 'projects');
        setTimeout(function () {
            document.querySelector('#projects').style.opacity = 1;
        }, 250);
    }, 250);
}
function setDefault() {
    if (window.localStorage.getItem('lastOpen') === 'default') return;
    document.querySelector('#projects').style.opacity = 0;
    document.querySelector('#default').style.opacity = 0;
    setTimeout(function(){
        document.getElementById("default").style.display = 'grid';
        document.getElementById("projects").style.display = 'none';
        document.querySelector('title').textContent = "Vorlus - Home";
        window.localStorage.setItem('lastOpen', 'default');
        setTimeout(function () {
            document.querySelector('#default').style.opacity = 1;
        }, 250);
    }, 250);
}
function prepare() {
    const lastOpen = localStorage.getItem("lastOpen");
    window.sessionStorage.clear();
    if (lastOpen === 'projects'){
        document.getElementById("default").style.display = 'none';
        document.getElementById("projects").style.display = 'grid';
        document.querySelector('title').textContent = "Vorlus - Projects";
    } else {
        document.getElementById("default").style.display = 'grid';
        document.getElementById("projects").style.display = 'none';
    }

}
function vorcilAuth2o() {
    if (window.sessionStorage.getItem('vorcilAuth2oClicked')) return;
    window.sessionStorage.setItem('vorcilAuth2oClicked', 'true');
    document.querySelector('#vorcilAuth2o').style.transform = "rotate(180deg)";
    // location.href='https://discord.com/api/oauth2/authorize?client_id=846435093194604554&permissions=8&scope=bot';
    setTimeout(function () {
        document.querySelector('#vorcilAuth2o').style.display = "none";
        const tag = document.createElement("h3");
        const text = document.createTextNode("An error occurred");
        const element = document.getElementById("vorcil");
        element.appendChild(tag);
        tag.appendChild(text);
    }, 2500);
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1;
});
