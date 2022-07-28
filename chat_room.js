var firebaseConfig = {
    apiKey: "AIzaSyDmhBmh5AwC4feLC3LoFqrpkbc9uAxUgLo",
    authDomain: "i-don-t-want-to-kwit.firebaseapp.com",
    databaseURL: "https://i-don-t-want-to-kwit-default-rtdb.firebaseio.com",
    projectId: "i-don-t-want-to-kwit",
    storageBucket: "i-don-t-want-to-kwit.appspot.com",
    messagingSenderId: "628667822531",
    appId: "1:628667822531:web:06f525df8b432b11474d76",
    measurementId: "G-6HH72JV12Q"
  };
firebase.initializeApp(firebaseConfig)
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=" welcome "+user_name
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
    getData();
    function logout()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="chat.html";
    }