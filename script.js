let menuVisible = false;
//Función que oculta o muestra el menu
function showHideMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function select(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las skills_set
function effectSkills(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 500){
        let skills_set = document.getElementsByClassName("progress");
        skills_set[0].classList.add("responsiveDesign");
        skills_set[1].classList.add("htmlcss");
        skills_set[2].classList.add("cssFrame");
        skills_set[3].classList.add("javascript");
        skills_set[4].classList.add("designTool");
        skills_set[5].classList.add("designTool");
        skills_set[6].classList.add("Communication");
        skills_set[7].classList.add("teamwork");
        skills_set[8].classList.add("creativity");
        skills_set[9].classList.add("dedication");
        skills_set[10].classList.add("team");
        skills_set[11].classList.add("trainer");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de skills_set
window.onscroll = function(){
    effectSkills();
} 