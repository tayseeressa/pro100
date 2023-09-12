// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCTyyLDSyZxwvDinIYvGb-4lZtvhv_jSyg",
    authDomain: "project100-b515d.firebaseapp.com",
    projectId: "project100-b515d",
    storageBucket: "project100-b515d.appspot.com",
    messagingSenderId: "617684427004",
    appId: "1:617684427004:web:1cbeb4706c4a3c5335f779",
    measurementId: "G-CCL7NVLC5E"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



