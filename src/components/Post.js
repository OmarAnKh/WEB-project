import { useEffect, useState } from "react";
import { useFireStore } from "../firebase/useFirestore";
import Comments from "./Comments";

import './OmarCompStyle.css'
const Post = (props) => {
    const [commentContent, setCommentContent] = useState("");
    const data = props.video
    const collection_name = props.collection_name
    const id = props.id
    const { editData } = useFireStore(collection_name);
    const allVideos = useFireStore(collection_name).data
    const { updateArray } = useFireStore(props.comments_section)
    const [owner, setOwner] = useState("")
    const [comment, setComment] = useState("")
    const [likeColor, setlikeColor] = useState("gray")
    const [likeWord, setlikeWord] = useState("Like")
    const [commentColor, setCommentColor] = useState("gray")
    const [commentsState, setCommentsState] = useState(0);
    const [commentWord, setCommentWord] = useState("comment")
    function likeButton() {
        if (likeColor === "gray") {
            setlikeColor("blue");
            setlikeWord("Liked");
            const postId = allVideos[id]?.id;
            if (postId) {
                editData(postId, "likes", data?.likes + 1);
            }
        } else if (likeColor === "blue") {
            setlikeColor("gray");
            setlikeWord("Like");
            const postId = allVideos[id]?.id;
            if (postId) {
                editData(postId, "likes", data?.likes - 1);
            }
        }
    }
    function shareButton() {
        const postId = allVideos[id]?.id;
        if (postId) {
            editData(postId, "shares", data?.shares + 1);
        }
    }
    function commentButton() {

        if (commentsState === 0) {
            setCommentsState(1)
        }
        else {
            setCommentsState(0)
        }

    }

    function postComment() {
        updateArray(id, props.comments[id]?.id, props.comments_section, props.comments[id]?.comments, commentContent)
        const postId = allVideos[id]?.id;
        if (postId) {
            editData(postId, "comments", data?.comments + 1);
        }
        setCommentColor("blue")
        setCommentWord("commented")
    }
    if (data) {
        return (
            <>
                <section >
                    <div className=" my-5 py-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-12 col-lg-10 col-xl-8 w-100" >
                                <div className="card">
                                    <div className="card-body">

                                        <p className="mt-3 mb-4 pb-2 ratio ratio-16x9">
                                            {
                                                <iframe key={data.id} src={data.link} allowFullScreen></iframe>
                                            }
                                        </p>

                                        <div className="d-flex flex-start align-items-center">
                                            {
                                                <h3 key={data.id}>
                                                    {data.title}
                                                </h3>
                                            }
                                        </div>
                                        <div className="d-flex flex-start align-items-center">


                                            <img
                                                key={data.id}
                                                className="rounded-circle shadow-1-strong me-3"
                                                src={data.photo}
                                                alt="avatar"
                                                width={50}
                                                height={50}
                                            />



                                            <div>
                                                <br></br>
                                                <h6 className="fw-bold text-primary mb-1">{

                                                    <p key={data.id} style={{ display: "inline" }}>
                                                        {data.owner}
                                                    </p>

                                                } <i className={data.check} style={{ color: "#32BD88", marginLeft: "5px", display: "inline" }} ></i></h6>

                                            </div>
                                        </div>

                                        <div className="card-footer bg-white" style={{ border: "0" }}>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <button onClick={likeButton} type="button" className="btn " >
                                                        <i className="far fa-thumbs-up " />
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16" style={{ color: likeColor }} >
                                                            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                                        </svg><div className="mb-0" style={{ fontSize: "17px", color: "gray", display: "inline" }}> {likeWord}<div key={data.id} style={{ display: "inline-block" }} >({data.likes})</div>

                                                        </div>
                                                    </button>
                                                    <button type="button" className="btn " onClick={commentButton} >
                                                        <i className="far fa-thumbs-up " />
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16" style={{ color: commentColor }}>
                                                            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15" />
                                                        </svg>
                                                        <div className="mb-0" style={{ fontSize: "17px", color: "gray", display: "inline" }}> {commentWord}<div key={data.id} style={{ display: "inline-block" }} >({data.comments})</div>

                                                        </div>
                                                    </button>
                                                    <button type="button" className=" btn " style={{ pointerEvents: "none", }}>
                                                        <i className="far fa-thumbs-up" />
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16" style={{ color: "gray" }}>
                                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                        </svg>
                                                        <div className="mb-0" style={{ fontSize: "17px", color: "gray", display: "inline" }}> Views (<div key={data.id} style={{ display: "inline-block" }} >({data.views})</div>
                                                            )
                                                        </div>
                                                    </button>
                                                </div>
                                                <button type="button" className=" btn " onClick={shareButton} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-sign-turn-left" viewBox="0 0 16 16" style={{ color: "gray" }}>
                                                        <path d="M11 8.5A2.5 2.5 0 0 0 8.5 6H7V4.534a.25.25 0 0 0-.41-.192L4.23 6.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 7 8.466V7h1.5A1.5 1.5 0 0 1 10 8.5V11h1z" />
                                                        <path fillRule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435Zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134Z" />
                                                    </svg>
                                                    <div className="mb-0" style={{ fontSize: "17px", color: "gray", display: "inline" }}> Share <div key={data.id} style={{ display: "inline-block" }} >({data.shares})</div>

                                                    </div>
                                                </button>
                                            </div>
                                        </div>

                                    </div>


                                    <div
                                        className="card-footer py-3 border-0"
                                        style={{ backgroundColor: "#f8f9fa" }}
                                    >
                                        <div className="d-flex flex-start w-100">
                                            {

                                                <img
                                                    key={data.id}
                                                    className="rounded-circle shadow-1-strong me-3"
                                                    src={data.photo}
                                                    alt="avatar"
                                                    width={50}
                                                    height={50}
                                                />


                                            }

                                            <div className="form-outline w-100">
                                                <textarea
                                                    className="form-control"
                                                    id="textAreaExample"
                                                    rows={2}
                                                    style={{ background: "#fff" }}
                                                    value={commentContent}
                                                    onChange={(e) => setCommentContent(e.target.value)}
                                                    placeholder="Write a comment"
                                                />
                                                <div className="float-end mt-2 pt-1">
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-primary btn-sm"
                                                        style={{ color: "gray" }}
                                                        onClick={postComment}
                                                    >
                                                        Post comment
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <Comments comments={props.comments} state={commentsState} comments_section={props.comments_section} id={id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

            </>
        )
    }
    else {
        return (
            <div>Loading </div>
        )
    }
}

export default Post;