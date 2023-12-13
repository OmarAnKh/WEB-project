import "../App.css";
import { useState, useEffect } from 'react';
import { collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from './firebase';

export const useFireStore = (collectioName) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, collectioName), (querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setData(newData)
        })
        return () => unsubscribe()
    }, [collectioName])



    const editData = async (id, editOBJ, newValue) => {
        const docRef = doc(db, collectioName, id);
        await updateDoc(docRef, {
            [editOBJ]: newValue
        });
    }

    const deleteData = async (id) => {
        await deleteDoc(doc(db, collectioName, id));
    }

    const addData = async (e, data) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, collectioName), {
                title: data
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return { data, addData, deleteData, editData };
}