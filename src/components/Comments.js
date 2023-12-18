import Replies from "./Replies";
import './OmarCompStyle.css'
import { useState } from "react";
import { useFireStore } from "../firebase/useFirestore";
const Comments = (props) => {
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [replyContent, setReplyContent] = useState('');
    const [replyIndex, setReplyIndex] = useState(null);
    const { addCommentsLike, addReply, addReplysLike } = useFireStore(props.comments_section)
    const toggleReplyInput = (index) => {
        setReplyIndex(replyIndex === index ? null : index);
        setShowReplyInput(!showReplyInput);
    };
    const handleReplyContentChange = (e) => {
        setReplyContent(e.target.value);
    };


    function addNewReply(index) {
        if (replyContent.trim() !== '') {
            addReply(index, props.comments[props.id]?.id, props.comments_section, props.comments[props.id]?.comments, replyContent);
            setReplyContent('');
            setShowReplyInput(!showReplyInput)
        }
    }
    function addCommentLike(index) {
        addCommentsLike(index, props.id, props.comments[props.id]?.id, props.comments_section, props.comments[props.id]?.comments, 1);
    }
    function addReplyLike(prelyIndex, commentIndex) {
        addReplysLike(prelyIndex, commentIndex, props.id, props.comments[props.id]?.id, props.comments_section, props.comments[props.id]?.comments, 1)
    }
    const { amountOfComments, setAmountOfComments } = props;
    const comments = props?.comments
    const videoComments = comments[props?.id]?.comments;
    const loadMoreComments = () => {
        setAmountOfComments((prevCount) => prevCount + 1);
    };
    if (props.state) {
        return (
            <section className="gradient-custom">
                {videoComments?.slice(0, amountOfComments).map((comment) => (
                    <div className="container my-3 " key={comment.index} >
                        <div className="row d-flex ">
                            <div className="">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="d-flex position-relative" style={{ width: "70%" }}>
                                                <div className="avatar avatar-xs">
                                                    <a href="#!">
                                                        <img
                                                            className="avatar-img rounded-circle"
                                                            src={comment.comment?.photo}
                                                            alt=""
                                                            width="50"
                                                            height="50"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="ms-2">
                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="mb-1">
                                                                {" "}
                                                                <a href="#!"> {comment.comment?.author} </a>
                                                            </h6>
                                                            <small className="ms-2">{comment.comment?.time}</small>
                                                        </div>
                                                        <p className="small mb-0">
                                                            {comment.comment?.content}.
                                                        </p>
                                                    </div>
                                                    <ul className="nav nav-divider py-2 small">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!" onClick={() => {
                                                                addCommentLike(comment?.index)
                                                            }}>
                                                                {" "}
                                                                Like {comment.comment?.likes} &bull;
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!" onClick={() => { toggleReplyInput(comment.index) }}>
                                                                {" "}
                                                                Reply &bull;
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!">
                                                                {" "}
                                                                View {comment.replies?.length} replies
                                                            </a>
                                                        </li>
                                                    </ul>


                                                    {showReplyInput && replyIndex === comment.index && (
                                                        <div className="ms-2">
                                                            <input type="text" className="input_reply" placeholder="Type your reply..." value={replyContent} onChange={handleReplyContentChange} />
                                                            <button className="btn btn-primary text-white" style={{ margin: "10px" }} onClick={() => addNewReply(comment.index)}>Submit Reply</button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <Replies data={comment.replies} index={comment.index} addReplyLike={addReplyLike} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                ))}
                {amountOfComments < videoComments?.length && (
                    <a href="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true" onClick={loadMoreComments}>
                        <div className="spinner-dots me-2">
                            <span className="spinner-dot"></span>
                            <span className="spinner-dot"></span>
                            <span className="spinner-dot"></span>
                        </div>
                        Load more replies
                    </a>
                )}
            </section>
        );
    }
    else {
        return (<div>
        </div>
        )
    }
};

export default Comments;