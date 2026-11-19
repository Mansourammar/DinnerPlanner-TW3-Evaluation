
 // initialize Firebase app
import { initializeApp } from "firebase/app";
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore";

// uncomment the following lines when you have your firebaseConfig. Understand what the lines are doing!
import {firebaseConfig} from "/src/firebaseConfig.js";
const app= initializeApp(firebaseConfig);
const db= getFirestore(app);
window.db= db

// make doc and setDoc available at the Console for testing
window.doc= doc
window.setDoc= setDoc

/* Replace NNN with your TW2_TW3 group number! */
const COLLECTION="dinnerModel047";

// TODO: read the code above
// TODO: export the function connectToPersistence, it can be empty for starters
export function connectToPersistence(model, watchFunction) {

    model.ready = false;

    const firestoreDoc = doc(db, COLLECTION, "model");

    function modelACB() {
        return [
            model.numberOfGuests,
            model.dishes,
            model.currentDishId
        ];
    }

    function persistenceACB() {
        if (!model.ready) {
            return;
        }

        const savePromise = setDoc(firestoreDoc, {
            numberOfGuests: model.numberOfGuests,
            dishes: JSON.parse(JSON.stringify(model.dishes)),
            currentDishId: model.currentDishId ?? null
        }, {merge: true});

        if (savePromise && typeof savePromise.catch === "function") {
            savePromise.catch(function saveErrorACB(error) {
                console.error(error);
            });
        }
    }

    watchFunction(modelACB, persistenceACB, {deep: true});

    getDoc(firestoreDoc)
        .then(function readFromPersistenceACB(snapshot) {
            const data = snapshot.data() || {};

            model.numberOfGuests = data.numberOfGuests ?? 2;
            model.dishes = data.dishes ?? [];
            model.currentDishId = data.currentDishId ?? null;

            model.ready = true;
        })
        .catch(function readErrorACB(error) {
            console.error(error);
        });
}
