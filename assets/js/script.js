function myFunction(x) {
    x.classList.toggle("change");

    var x = document.getElementById("navbar-menu-mobile");

    if (x.className === "navbar-menu-mobile") {
        x.className += " active-menu";
      } else {
        x.className = "navbar-menu-mobile";
      }

}


