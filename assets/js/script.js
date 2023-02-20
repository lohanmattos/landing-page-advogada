function abrirMenu(){
    var menu = document.getElementById("navbar-menu-mobile");
    var aberto = false

    if (menu.classList){
        menu.classList.add("ativar");
        aberto = true;
    } 
    else menu.classList.remove("ativar");

    console.log(menu)
}
