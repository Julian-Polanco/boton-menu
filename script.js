//funcionalidad del boton
document.getElementById("botonArriba").addEventListener("click", scrollUp);

function scrollUp(){

  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0){
        window.scrollTo (0, 0);
    }
}


///

