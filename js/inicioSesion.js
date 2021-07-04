function iniciarSesion() {   
    var correo = document.getElementById('correoInicio').value;
    var password = document.getElementById('passwordInicio').value;

    console.log(correo);
    console.log(password);

    firebase.auth().signInWithEmailAndPassword(correo, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            var email, uid;
            if (user != null) {
                email = user.email;
                uid = user.uid;
                console.log("Bienvenido! " + email + " ID: " + uid);
            }
            location.href="perfil.html";
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("ERROR " + errorMessage);
            alert('Error al registrar el usuario: ' + errorMessage);
        });
}

function observador() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("Existe usuario activo");
        } else {
            console.log("No existe usuario activo");
        }
      });
}