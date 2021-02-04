let asterisco= 1;
let altura = 5;

function crearTriangulo(){
   // let n = parseInt(window.prompt('De que altura quieres el triangulo?: '));
    //console.log("El tamaño es:" + n);
    for(let j = 1; j <= altura ; j++){
        console.log(altura);
        for(let i = 1; i <= asterisco; i++){
            document.write("*");
            }
            console.log(asterisco);
            document.write("</br>");
            asterisco = asterisco + 1;
    }
}
crearTriangulo();
