function registrarse(){
    var nombre = document.form_registro.nombre.value
    var apellido = document.form_registro.apellido.value
    var email = document.getElementById("email_id").value
    var dni = document.getElementById("dni_id").value
    var telefono = document.getElementById("telefono_id").value


    console.log(nombre,apellido,email,dni,telefono)
    if(nombre==""){
        document.getElementById("error_nombre").innerHTML = "EL campo es obligatorio"
    }else{
        document.getElementById("error_nombre").innerHTML = ""
    }
}
function tipoSeguro(){
    
    var seguro = document.getElementById("seguro_id").value
    console.log("tipoSeguro",seguro)

    if(seguro=="Basico"){
        seguro = seguro +  " $500";
    }else if(seguro=="Intermedio"){
        seguro = seguro +  " $1000";
    }else{
        seguro = seguro +  " $1500";
    }
    document.getElementById("valor_tipo_seguro").innerHTML = seguro 

}

tipoSeguro()
