import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAU7cr8zug2YWujy7aaLhPfGL6ANh61Jm4",
    authDomain: "reactjs-b515f.firebaseapp.com",
    databaseURL: "https://reactjs-b515f.firebaseio.com",
    projectId: "reactjs-b515f",
    storageBucket: "reactjs-b515f.appspot.com",
    messagingSenderId: "967119055842",
    appId: "1:967119055842:web:11689afc456c3de1c0e7bb",
    measurementId: "G-VK54TX005M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase