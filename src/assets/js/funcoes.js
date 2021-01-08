//Função do Menu Lateral do sistema accordion




function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function MenuToggle() {    
    var element = document.getElementById("wrapper");
    element.classList.toggle("toggled");
  }


