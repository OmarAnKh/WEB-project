import { useState } from "react";
import { useFireStore } from "../firebase/useFirestore";
import Comments from "./Comments";

const Post = () => {
    const { data, addData, editData } = useFireStore("posts");
    const [owner, setOwner] = useState("")
    const [comment, setComment] = useState("")
    const [likeColor, setlikeColor] = useState("gray")
    const [likeWord, setlikeWord] = useState("Like")
    const [commentColor, setCommentColor] = useState("gray")
    const [commentWord, setCommentWord] = useState("comment")

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
    function commentButton() {
        if (commentColor === "gray") {
            setCommentColor("blue")
            setCommentWord("commented")
        }
        else if (commentColor === "blue") {
            setCommentColor("gray")
            setCommentWord("comment")
        }
    }
    return (
        <>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container my-5 py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12 col-lg-10 col-xl-8">
                            <div className="card">
                                <div className="card-body">

                                    <p className="mt-3 mb-4 pb-2 ratio ratio-16x9">
                                        {data?.map((post) => (
                                            <iframe key={post.id} src={post.link} allowFullScreen></iframe>
                                        ))}
                                    </p>

                                    <div className="d-flex flex-start align-items-center">
                                        {data?.map((post,) => (
                                            <h3 key={post.id}>
                                                {post.title}
                                            </h3>
                                        ))}
                                    </div>
                                    <div className="d-flex flex-start align-items-center">
                                        {
                                            data?.map((post) => (
                                                <img
                                                    key={post.id}
                                                    className="rounded-circle shadow-1-strong me-3"
                                                    src={post.personalPhoto}
                                                    alt="avatar"
                                                    width={30}
                                                    height={30}
                                                />
                                            ))
                                        }

                                        <div>
                                            <br></br>
                                            <h6 className="fw-bold text-primary mb-1">{
                                                data?.map((post) => (
                                                    <p key={post.id}>
                                                        {post.Owner}
                                                    </p>
                                                ))
                                            }</h6>

                                        </div>
                                    </div>

                                    <div className="small d-flex justify-content-start row g-3">
                                        <div href="#!" className=" col ">
                                            <button onClick={likeButton} type="button" className="btn btn-light" >
                                                <i className="far fa-thumbs-up me-2" />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16" style={{ color: likeColor }} >
                                                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                                </svg><div className="mb-0" style={{ fontSize: "17px", color: "gray", display: "inline" }}> {likeWord}{data?.map((post) => (<div key={post.id} style={{ display: "inline-block" }} >({post.likes})</div>
                                                ))}
                                                </div>
                                            </button>
                                        </div>
                                        <div href="#!" className=" col ">
                                            <button type="button" className="btn btn-light" >
                                                <i className="far fa-thumbs-up me-2" />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16" style={{ color: commentColor }}>
                                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15" />
                                                </svg>
                                                <div className="mb-0" style={{ fontSize: "17px", color: "gray", display: "inline" }}> {commentWord}{data?.map((post) => (<div key={post.id} style={{ display: "inline-block" }} >({post.comments})</div>
                                                ))}
                                                </div>
                                            </button>
                                        </div>
                                        <div href="#!" className=" col ">
                                            <button type="button" className=" btn btn-light" style={{ pointerEvents: "none", }}>
                                                <i className="far fa-thumbs-up me-2" />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16" style={{ color: "gray" }}>
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                </svg>
                                                <div className="mb-0" style={{ fontSize: "17px", color: "gray", display: "inline" }}> Views {data?.map((post) => (<div key={post.id} style={{ display: "inline-block" }} >({post.Views})</div>
                                                ))}
                                                </div>
                                            </button>
                                        </div>
                                        <div href="#!" className="col" >
                                            <button type="button" className=" btn btn-light" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-sign-turn-left" viewBox="0 0 16 16" style={{ color: "gray" }}>
                                                    <path d="M11 8.5A2.5 2.5 0 0 0 8.5 6H7V4.534a.25.25 0 0 0-.41-.192L4.23 6.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 7 8.466V7h1.5A1.5 1.5 0 0 1 10 8.5V11h1z" />
                                                    <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435Zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134Z" />
                                                </svg>
                                                <div className="mb-0" style={{ fontSize: "17px", color: "gray", display: "inline" }}> Share {data?.map((post) => (<div key={post.id} style={{ display: "inline-block" }} >({post.shares})</div>
                                                ))}
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
                                            data?.map((post) => (
                                                <img
                                                    key={post.id}
                                                    className="rounded-circle shadow-1-strong me-3"
                                                    src={post.personalPhoto}
                                                    alt="avatar"
                                                    width={30}
                                                    height={30}
                                                />
                                            ))
                                        }
                                        <div className="form-outline w-100">
                                            <textarea
                                                className="form-control"
                                                id="textAreaExample"
                                                rows={2}
                                                style={{ background: "#fff" }}
                                                defaultValue={""}
                                                placeholder="Write a comment"
                                            />

                                        </div>
                                    </div>

                                    <Comments />
                                    <div className="float-end mt-2 pt-1">
                                        <button type="button" className="btn btn-outline-primary btn-sm" style={{ color: "gray" }}>
                                            Post comment
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )

}

export default Post;