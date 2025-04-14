function boton(){
    var valores = [true, 5, false, "hola", "adios",2];
    var bool1 = valores[0];

    if(valores[3] > valores[4])
        console.log("la palabra mayor es "+ valores[3]);
    else
        console.log("la palabra mayor es "+ valores[4]);

    if(bool1 == valores[0])
        console.log("el resultado es verdadero")
    if(bool1 == valores[2])
        console.log("el resultado es falso")

    console.log(valores[1]+"+"+valores[5]+"="+(valores[1]+valores[5]))
    console.log(valores[1]+"-"+valores[5]+"="+(valores[1]-valores[5]))
    console.log(valores[1]+"*"+valores[5]+"="+(valores[1]*valores[5]))
    console.log(valores[1]+"/"+valores[5]+"="+(valores[1]/valores[5]))
    console.log(valores[1]+"^"+valores[5]+"="+(valores[1]**valores[5]))
}
