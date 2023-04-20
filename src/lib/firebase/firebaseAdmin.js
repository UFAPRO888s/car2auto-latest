import admin from "firebase-admin";

const verifyIdToken = (token) => {
    const firebasePrivateKey = "./serviceAccountKey.json"

    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: "https://car2auto-2023-default-rtdb.asia-southeast1.firebasedatabase.app",
                // https://stackoverflow.com/a/41044630/1332513
                privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
            }),
            databaseURL: "https://car2auto-2023-default-rtdb.asia-southeast1.firebasedatabase.app",
        })
    }

    return admin
        .auth()
        .verifyIdToken(token)
        .catch((error) => {
            throw error
        })
}

export default verifyIdToken