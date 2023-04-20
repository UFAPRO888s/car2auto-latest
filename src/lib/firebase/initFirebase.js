// Modular Firebase v.9 Initialization.
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from '@firebase/database'

const clientCredentials = {
  apiKey: 'AIzaSyBwESi48cGjKDDpkdl_FJqP60IbuuW1hiY',
  authDomain: 'car2auto-2023.firebaseapp.com',
  //databaseURL:
  //  'https://car2auto-2023-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'car2auto-2023',
  storageBucket: 'car2auto-2023.appspot.com',
  messagingSenderId: '198431939068',
  appId: '1:198431939068:web:2e4af41776dd223bb67a79',
  measurementId: 'G-PY1K9CHXJL',
}

function initFirebase() {
  if (typeof window !== undefined) {
    initializeApp(clientCredentials)
    //console.log('Firebase has been init successfully')
  }
}

const app = initializeApp(clientCredentials)

const db = getFirestore(app)

const realDB = getDatabase(app)

export { initFirebase, db, realDB }
