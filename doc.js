let elemento = document.getElementById(elemento)
let cantidad = 0

window.addEventListener("keydown",(e) => {
    let tecla=e.key

})
switch (tecla) {
    case "arrowRight":
        cantidad+=100
        elemento.style.transform =`translateX($(cantidad)px)`
    case "arrowLeft": 
    cantidad-=100    
        elemento.style.transform = `translateX($(cantidad)px)`
        
        
        break;

    default:
        break;
}