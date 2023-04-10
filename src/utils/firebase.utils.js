import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import { getFirestore, doc,getDoc,setDoc,collection,onSnapshot,query } from "firebase/firestore"

const firebaseConfig = {
    apiKey: 'AIzaSyBwESi48cGjKDDpkdl_FJqP60IbuuW1hiY',
    authDomain: 'car2auto-2023.firebaseapp.com',
    projectId: 'car2auto-2023',
    storageBucket: 'car2auto-2023.appspot.com',
    messagingSenderId: '198431939068',
    appId: '1:198431939068:web:2e4af41776dd223bb67a79',
    measurementId: 'G-PY1K9CHXJL',
  }
// Initialize Firebase

export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

 provider.setCustomParameters({
     prompt:"select_account"
 })

 export const auth = getAuth();
 export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
 export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

 export const db = getFirestore();

 export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {

     const userDocRef = doc(db, 'users',  userAuth.uid);
     const userSnapshot = await getDoc(userDocRef);

     if(!userSnapshot.exists()){

         const { displayName, email } = userAuth;
         const createdAt = new Date();
         try{
             await setDoc(userDocRef,{
                 displayName,
                 email,
                 createdAt,
                 ...additionalInformation
             })
         }
         catch(error){
             console.log("error while creating document",error.message);
         }
     }
 }

 export const createAuthUserWithEmailAndPassword = async (email,password) => {
     if(!email || !password) return;

     return await createUserWithEmailAndPassword(auth,email,password);
 }
 export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password);
}
export const signOutUser = () => signOut(auth)

export const onAuthStateChangedListener = (callback) =>{
   return onAuthStateChanged(auth,callback)
}


// link generation methods
// export const createLinkDocumentForUser = async (uid,link,additionalInformation={}) => {

//     const {ref1,ref2} = additionalInformation;

//     // const userDocRef = doc(db, 'users',  uid);
//     // const createdAt = new Date();
//     // const linkDocRef = await addDoc( collection( userDocRef, "referrals" ),{
//     //     link,
//     //     createdAt,
//     //     ...additionalInformation
//     // } );
//     const utm_content = ref1||ref2? `&utm_content:${ ref1? (encodeURIComponent(ref1)(ref2?",":"")) :"" } ${ ref2? encodeURIComponent(ref2) :"" }` : "";
//     // const generatedLink = `${link}?utm_source=${encodeURIComponent(uid)}${utm_content}&utm_medium=${linkDocRef.id}`;
//     const generatedLink = `${link}?utm_source=${encodeURIComponent(uid)}${utm_content}`;
//     return generatedLink;
// }

export const onUserReferralsStateChangedListener = (uid,callback) => {
    const q = query(collection(db, "users",uid,"referrals"));
    return onSnapshot(q, (snapshot)=>{
        snapshot.docChanges().forEach((change)=>{
            const docObject = change.doc.data()
            callback({
                id:change.doc.id,
                ...docObject,
                createdAt:docObject.createdAt.toDate()
            })
        })
    });

}

export const onUserStateChangeListener = (uid,callback) => {
    const q = query(doc(db, "users",uid));
    return onSnapshot(q, (snapshot)=>{
        callback( snapshot.data() )
    })
}