// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'estate-1c2bf.firebaseapp.com',
  projectId: 'estate-1c2bf',
  storageBucket: 'estate-1c2bf.appspot.com',
  messagingSenderId: '191671196368',
  appId: '1:191671196368:web:fe3d30ab3d9e84d5f49cd5',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
