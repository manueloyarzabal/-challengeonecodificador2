const inputTexto = document.querySelector(".ingresetexto");
const mensaje = document.querySelector(".sidebar-java");
const sidebar = document.querySelector(".sidebar");
const textoMostrado = document.querySelector(".textoMostrado");
const button = document.querySelector(".botoncopiar")
const input = document.querySelector(".textoMostrado")
const mensajeEncontrado = document.querySelector(".mensajeEncontrado")




function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    sidebar.classList.add("hide");
    mensaje.classList.remove("hide");
    textoMostrado.innerHTML = textoEncriptado;
      

}

function encriptar(StringParaEncriptar){
    const matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }
    }
    return StringParaEncriptar;
}

function btndesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    sidebar.classList.add("hide");
    mensaje.classList.remove("hide");
    textoMostrado.innerHTML = textoEncriptado;
      

}

function desencriptar(StringParaEncriptar){
    const matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);    

        }
    }
    return StringParaEncriptar;
}

function btncopiar(){
    const textoCopiado = copiar(inputTexto.value);
    mensaje.value = textoCopiado;
    textoMostrado.innerHTML = textoCopiado;

}

function copiar(StringParaCopiar){

 if(textoMostrado = desencriptar){
    answer.innerHTML = 'Copiado!';
 }
 
   

    
    
    

}






