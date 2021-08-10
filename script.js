//funcionalidad del boton
document.getElementById("botonArriba").addEventListener("click", irArriba);
function irArriba(){
  let desplazamiento = document.documentElement.scrollTop || document.body.scrollTop;
  if (desplazamiento > 0) {
    window.scrollTo (0, 0);
    }
    }

botonSubir = document.getElementById("botonArriba");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        botonSubir.style.transform = "scale(1)";
    }else if(scroll < 500){
        botonSubir.style.transform = "scale(0)";
    }

}