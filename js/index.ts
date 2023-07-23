import { initializeApp } from 'firebase/app';
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBJ_GTJCC81jr9u9GPGWAcyCh81ZCBWWZg",
    authDomain: "inventory-control-bussropprj.firebaseapp.com",
    projectId: "inventory-control-bussropprj",
    storageBucket: "inventory-control-bussropprj.appspot.com",
    messagingSenderId: "397923798650",
    appId: "1:397923798650:web:89b0a19be1c979068e35c3",
    measurementId: "G-Z2186F2JJX"
};
const app = initializeApp(config);
const db = getFirestore(app);

const getCollection = (path: string, onComplete: (res: string) => void, onError: () => void) => {
    const col = collection(db, path);
    getDocs(col).then((res) => onComplete(JSON.stringify(res.docs.map(doc => ({id: doc.id,...doc.data()}))))).catch(onError);
}

const addDocument = (path: string, data: string, onComplete: (id: string) => void, onError: () => void): string => {
    const col = collection(db, path);
    const docRef = doc(col);
    setDoc(docRef, JSON.parse(data)).then(() => onComplete(docRef.id)).catch(onError);
    return docRef.id;
}

const getDocument = (path: string, onComplete: (res: string) => void, onError: () => void) => {
    const docRef = doc(db, path);
    getDoc(docRef).then((res) => onComplete(JSON.stringify({id: res.id,...res.data()}))).catch(onError);
}

//@ts-expect-error
window._wasm_js_bridge = {
    addDocument,
    getCollection,
    getDocument,
}