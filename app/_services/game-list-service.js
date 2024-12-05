import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, updateDoc, doc, deleteDoc } from "firebase/firestore";

export async function getItems(userId, itemListStateSetter) {
    try {
        const allItemsReference = collection(db, "users", userId, "gamelist");
        const allItemsQuery = query(allItemsReference);
        const itemsSnapshot = await getDocs(allItemsQuery);
        let itemList = [];
        itemsSnapshot.forEach(
            (docSnap) => {
                let thisItem = {
                    ...docSnap.data()
                };
                itemList.push(thisItem);
            }
        );
        itemListStateSetter(itemList);
    } catch (error) {
        console.log(`Error Encountered: ${error}`);
    };
};

export async function addItem(userId, gameItem) {
    try {
        const newItemReference = collection(db, "users", userId, "gamelist");
        const newItemPromise = await addDoc(newItemReference, gameItem);

        const docRef = doc(db, "users", userId, "gamelist", newItemPromise.id);
        await updateDoc(docRef, { docid: newItemPromise.id });

        console.log(newItemPromise.id);
        return newItemPromise.id;
    } catch (error) {
        console.log(`Error Encountered: ${error}`);
    };
};

export async function dbDeleteItem(userId, docID) {
    try {
        const deleteItemReference = doc(db, "users", userId, "gamelist", docID);
        await deleteDoc(deleteItemReference);
    } catch (error) {
        console.log(`Error Encountered: ${error}`);
    };
};

export async function updateRating(userId, docID, userRating) {
    try {
        const docRef = doc(db, "users", userId, "gamelist", docID);
        await updateDoc(docRef, { personalRating: userRating });
    } catch (error) {
        console.log(`Error Encountered: ${error}`);
    };
};