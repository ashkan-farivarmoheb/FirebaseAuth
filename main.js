(function() {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDPmQz3h86L1mShwq2bOMrnu2zXX_n-bgw",
    authDomain: "fir-auth-851b3.firebaseapp.com",
    databaseURL: "https://fir-auth-851b3.firebaseio.com",
    projectId: "fir-auth-851b3",
    storageBucket: "",
    messagingSenderId: "504147932743"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('txtEmail')
  const txtPassword = document.getElementById('txtPassword')
  const btnLogin = document.getElementById('btnLogin')
  const btnSignUp = document.getElementById('btnSignUp')
  const btnLogout = document.getElementById('btnLogout')

  console.log('Ashkan');
  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sing In
    const promise  = auth.signInWithEmailAndPassword(email, pass)
    promise.catch(e => console.log(e.message))
  });

  btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sing Up
    const promise  = auth.createUserWithEmailAndPassword(email, pass)
    promise
    .then(user => console.log(user))
    .catch(e => console.log(e.message))
  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    }else{
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

}());
