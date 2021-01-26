import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDZDhpluKq-LaQnjffwWWyqMUN4KSpU0QY',
	authDomain: 'e-commerce-96599.firebaseapp.com',
	projectId: 'e-commerce-96599',
	storageBucket: 'e-commerce-96599.appspot.com',
	messagingSenderId: '287912824789',
	appId: '1:287912824789:web:1a3ba56579572f4a6ff75c',
	measurementId: 'G-V594M435C2'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
