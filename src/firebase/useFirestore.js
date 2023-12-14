import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from './firebase';

export const useFirestore = (collectionName) => {
    const [data, setData] = useState([]);

    const getData = async () => {
        await getDocs(collection(db, collectionName))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setData(newData);
            })
    }

    const deleteData = async (id) => {
        await deleteDoc(doc(db, collectionName, id));
    }

    const addData = async (e, title, owner) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, collectionName), {
                title: title,
                owner: owner
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    useEffect(() => {
        getData();
    }, [collectionName]);

    return { data, addData, deleteData }
}
