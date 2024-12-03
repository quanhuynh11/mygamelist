import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

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
    }
};

export async function addItem(userId, gameItem) {
    try {
        const newItemReference = collection(db, "users", userId, "gamelist");
        const newItemPromise = await addDoc(newItemReference, gameItem);
        return newItemPromise.id;
    } catch (error) {
        console.log(`Error Encountered: ${error}`);
    }
};