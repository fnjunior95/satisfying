import { initializeApp } from "firebase/app";
import{ initializeAuth, getReactNativePersistence} from "firebase/auth";
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initializeFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFwY-FyJ5SNp05knYadhvNnTNb5qinc6g",
  authDomain: "satisfyingyou-7b182.firebaseapp.com",
  projectId: "satisfyingyou-7b182",
  storageBucket: "satisfyingyou-7b182.appspot.com",
  messagingSenderId: "636940024509",
  appId: "1:636940024509:web:56d03cd4f24906cfe495d4",
  measurementId: "G-N2ESB1MSVJ"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const storage = getStorage(app);

const db = initializeFirestore(app, {experimentalForceLongPolling:true});

export {auth, app, storage, db };
