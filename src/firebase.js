import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBdReQnrRoeZ3ZZznzXNhQZqcF0FLk-i3M",
  authDomain: "todoist-tut-4617b.firebaseapp.com",
  databaseURL: "https://todoist-tut-4617b.firebaseio.com",
  projectId: "todoist-tut-4617b",
  storageBucket: "todoist-tut-4617b.appspot.com",
  messagingSenderId: "166408362527",
  appId: "1:166408362527:web:7e6a12f89c92cfb786532a"
})

export { firebaseConfig as firebase };