firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var id = user.uid;
        var docRef = firebase.firestore().collection("users").doc(id);
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                document.getElementById('baner-perfil').innerHTML = "Bienvenido " + doc.get("Nombre") + "!";
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    } else {
        console.log("No existe usuario activo");
    }
});

function logOut() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        location.href="index.html";
      }).catch((error) => {
        // An error happened.
      });
}