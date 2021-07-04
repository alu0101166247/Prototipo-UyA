function registrar() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var generoh = document.getElementById('generoh');
    var generom = document.getElementById('generom');
    var genero;
    var ciudad = document.getElementById('ciudad').value;
    var correo = document.getElementById('correo').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;

    console.log(nombre);
    console.log(apellido);
    if (generoh.checked) {
        genero = "hombre";
    }
    if (generom.checked) {
        genero = "mujer";
    }
    console.log(genero);
    console.log(ciudad);
    console.log(correo);
    console.log(password);
    console.log(repassword);

    firebase.auth().createUserWithEmailAndPassword(correo, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            var email, uid;
            if (user != null) {
                email = user.email;
                uid = user.uid;
                console.log("Registrado! " + email);
                writeUserData(uid, nombre, apellido, correo, genero, ciudad);
            }
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("ERROR " + errorMessage);
            alert('Error al registrar el usuario: ' + errorMessage);
            // ..
        });
}

function getCiudad(ciudad) {
    if (ciudad == 1) {
        return "Santa Cruz";
    }
    if (ciudad == 2) {
        return "La laguna";
    }
    if (ciudad == 3) {
        return "La Orotava";
    }
    if (ciudad == 4) {
        return "Los realejos";
    }
    if (ciudad == 5) {
        return "Tacoronte";
    }
    if (ciudad == 6) {
        return "Icod de los vinos";
    }
    if (ciudad == 7) {
        return "Puerto de la Cruz";
    }
}

function writeUserData(uid, nombre, apellido, correo, genero, ciudad) {
    firebase.firestore().collection("users").doc(uid).set({
        ID: uid,
        Nombre: nombre,
        Apellido: apellido,
        Correo: correo,
        Genero: genero,
        Ciudad: getCiudad(ciudad),
    })
    .then(() => {
        location.href="perfil.html";
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
