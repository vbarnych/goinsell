let stateChanged = (authParamater) => {
    authParamater.onAuthStateChanged(user => {
        if (user) {
            user.getIdTokenResult().then(idTokenResult => {
                //user.admin = idTokenResult.claims.admin;
                setupUI(user);
            });
            db.collection('guides').onSnapshot(snapshot => {
                setupGuides(snapshot.docs);
            }, err => console.log(err.message));
        } else {
            setupUI();
            setup([]);
        }
    });
};


let updateMyLots = (user) => {
    if (user){
        db.collection("lots").onSnapshot(snapshot => {
            setupLots(snapshot.docs);
        })

    }
};

let setupUI = (user) => {
    if (user){
        db.collection("users").doc(user.uid).get().then(doc => {
            document.getElementById("userArea").value = doc.data().name;
        })

    }
    else {

    }
}

let setupLots = (data) => {
    if (data.length){
        let text = "";
        data.forEach(doc => {
            if (doc.data().user === auth.currentUser.uid)
            text += doc.data().name;
            text += "\n";
        });
        document.getElementById("myLotsArea").value = text;
    }
};


let register = (e) => {
    e.preventDefault();

    const email = document.getElementById("regInputEmail").value;
    const password = document.getElementById("regInputPassword").value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {

        return db.collection("users").doc(cred.user.uid).set({
            name: document.getElementById("regInputName").value,
            email : email,
            password : password
        })
    });
    /*location.href = "login.html";*/
};

let logout = () => {
    auth.signOut();
};

let login = (e) => {
    e.preventDefault();

    const email = document.getElementById("logInputEmail").value;
    const password = document.getElementById("logInputPassword").value;

    auth.signInWithEmailAndPassword(email, password);
    /*location.href = "profile.html";*/
};

let addLot = () => {
    //e.preventDefault();

    console.log("addLot");

    db.collection("lots").doc().set({
        name : document.getElementById("profileInputName").value,
        price : document.getElementById("profileInputPrice").value,
        description : document.getElementById("prDeskArea").value,
        tags : document.getElementById("prTagsArea").value,
        user : auth.currentUser.uid
    });

};