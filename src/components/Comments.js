import { useState } from "react";
import { useFireStore } from "../firebase/useFirestore";
import Replies from "./Replies";

const Comments = () => {
    const { addData, editData, data } = useFireStore("comments");
    const test = data[0]?.comments;
    const [likeColor, setlikeColor] = useState("gray")
    const [likeWord, setlikeWord] = useState("Like")
    function likeButton() {
        if (likeColor === "gray") {
            setlikeColor("blue");
            setlikeWord("Liked");
            const postId = data[0]?.id;
            if (postId) {
                editData(postId, "likes", data[0]?.likes + 1);
            }
        } else if (likeColor === "blue") {
            setlikeColor("gray");
            setlikeWord("Like");
            const postId = data[0]?.id;
            if (postId) {
                editData(postId, "likes", data[0]?.likes - 1);
            }
        }
    }
    return (
        <section className="gradient-custom">
            {test?.map((comment) => (
                <div className="container my-3 " key={comment.comment.id}>
                    <div className="row d-flex ">
                        <div className="">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="text-center mb-4 pb-2"></h4>
                                    <div className="row">
                                        <div className="col">
                                            <div className="d-flex flex-start">
                                                <img className="rounded-circle shadow-1-strong me-3"
                                                    src={comment.comment.photo} alt="avatar" width="65"
                                                    height="65" />
                                                <div className="flex-grow-1 flex-shrink-1">
                                                    <div>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <h5 className="mb-1">
                                                                {comment.comment.auther}
                                                            </h5>
                                                            <span className="small"> {comment.comment.time}</span>
                                                        </div>
                                                        <p className="small mb-0" >
                                                            {comment.comment.content}.
                                                        </p>
                                                        <div href="#!" className=" col ">
                                                            
                                                                <i className="far fa-thumbs-up me-2" />
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16" style={{ color: likeColor }} onClick={likeButton} >
                                                                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                                                </svg><div className="mb-0" style={{ fontSize: "10px", color: likeColor, display: "inline" }}> {likeWord}({comment.comment.likes})
                                                                </div>
                                                            
                                                        </div>
                                                    </div>

                                                    <Replies data={comment.Replies} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Comments;