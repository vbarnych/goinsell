(function() {

    var script = document.createElement('script');

    if (true){
        script.src = "https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js"; // firebase
        document.getElementsByTagName('head')[0].appendChild(script);

        var firebaseConfig = {
            apiKey: "AIzaSyBg5bgjGWsv9OaE-zuH6l1P3z2K1UbTGVk",
            authDomain: "goinsell.firebaseapp.com",
            databaseURL: "https://goinsell.firebaseio.com",
            projectId: "goinsell",
            storageBucket: "goinsell.appspot.com",
            messagingSenderId: "945045033295",
            appId: "1:945045033295:web:24fae3d7e656f8e48df53a"
        };

        firebase.initializeApp(firebaseConfig);
    }
    if (!firebase.firestore()){
        script.src = "https://www.gstatic.com/firebasejs/7.6.1/firebase-firestore.js"; // firestore
        document.getElementsByTagName('head')[0].appendChild(script);
        const db = firebase.firestore();
    }

    if (!firebase.auth()){
        script.src = "https://www.gstatic.com/firebasejs/7.6.1/firebase-auth.js"; // auth
        document.getElementsByTagName('head')[0].appendChild(script);
        const auth = firebase.auth();
    }

}());














    /*function addLot() {
        db.collection("lots").doc().set({
            name : document.getElementById("profileInputName").value,
            price : +document.getElementById("profileInputPrice").value,
            description : document.getElementById("prDeskArea").value,
            tags : document.getElementById("prTagsArea").value,
            userId : "userId"

        }).then(function () {
            console.log("ZBS")
        }).catch(function (error) {
            console.error("BAD", error);
        });
    }


    function registr() {





        db.collection("users").doc().set({
            name: document.getElementById("regInputName").value,
            email: document.getElementById("regInputEmail").value,
            password: document.getElementById("regInputPassword").value,

        }).then(function () {
            console.log("ZBS")
        }).catch(function (error) {
            console.error("BAD", error);
        });
    }*/

