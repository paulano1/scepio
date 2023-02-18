// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDb-gNrZCQiTMxngkA2BGTxdiOOfiX6CSc',
  authDomain: 'scepio-7f614.firebaseapp.com',
  projectId: 'scepio-7f614',
  storageBucket: 'scepio-7f614.appspot.com',
  messagingSenderId: '58915676335',
  appId: '1:58915676335:web:6a688b8145c4c01418345a',
  measurementId: 'G-YC85EP2X6V',
};

// Initialize Firebaseasda
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
