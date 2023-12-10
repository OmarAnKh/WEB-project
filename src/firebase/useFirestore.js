import "../App.css";
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from './firebase';



export const useFireStore = (collectioName) => {
    const [data, setData] = useState([]);


    const getData = async () => {

        await  getDocs(collection(db, collectioName))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setData(newData);
            })
    }


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




    useEffect(() => {
        getData();
    }, [])
    return { data, addData, deleteData, editData, getData }
}