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
        const docRef = doc(db, collectioName, id)
        await updateDoc(docRef, {
            [editOBJ]: newValue
        })
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

    const updateArray = async (index, id, collectioName, Doc, content, author = "anonymous", time = "now", photo = "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg", likes = 0, views = 0) => {

        let comments = Doc

        comments = [...Doc, {
            comment: {
                content,
                author,
                time,
                photo,
                views,
                likes
            }, index: Doc.length, replies: []
        }]
        const ref = doc(db, collectioName, id);
        await updateDoc(ref, {
            comments
        });
    }
    const addReply = async (replyIndex, id, collectionName, Doc, replyContent = "", replyAuthor = "anonymous", replyTime = "now", replyPhoto = "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg", replyLikes = 0, replyViews = 0) => {
        let updatedDoc = [...Doc];

        let updatedReplies = [...updatedDoc[replyIndex].replies];
        console.log(updatedDoc)
        console.log(updatedReplies)
        updatedReplies.push({
            content: replyContent,
            author: replyAuthor,
            time: replyTime,
            photo: replyPhoto,
            likes: replyLikes,
            views: replyViews,
            index: updatedDoc[replyIndex].replies.length
        });

        updatedDoc[replyIndex] = {
            ...updatedDoc[replyIndex],
            replies: updatedReplies
        };

        const ref = doc(db, collectionName, id);
        await updateDoc(ref, {
            comments: updatedDoc
        });
    }
    const addCommentsLike = async (replyIndex, index, id, collectionName, Doc, amount) => {
        let comments = Doc

        comments[replyIndex].comment.likes = comments[replyIndex].comment.likes + amount

        const ref = doc(db, collectioName, id);
        await updateDoc(ref, {
            comments
        });
    }
    const addReplysLike = async (replyIndex, commentIndex, index, id, collectionName, Doc, amount) => {
        let comments = Doc

        comments[commentIndex].replies[replyIndex].likes = comments[commentIndex].replies[replyIndex].likes + amount;

        const ref = doc(db, collectioName, id);
        await updateDoc(ref, {
            comments
        });
    }
    return { data, addData, deleteData, editData, updateArray, addReply, addCommentsLike, addReplysLike };
}