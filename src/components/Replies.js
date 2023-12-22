import './OmarCompStyle.css'
import { useState } from 'react';
const Replies = (props) => {

    const test = props.data;
    const [visibleReplies, setVisibleReplies] = useState(1);
    const loadMoreReplies = () => {
        setVisibleReplies((prevCount) => prevCount + 1);
    };
    const loadLessReplies = () => {
        setVisibleReplies((prevCount) => prevCount - 1);
    };
    return (
        <>

            {

                test?.slice(0, visibleReplies).map((reply, index) => (

                    <div key={reply.index} style={{ marginLeft: "6%", width: "70%" }}>
                        <div className="d-flex"></div>

                        <div className="d-flex" key={reply.index}>
                            <div className="avatar avatar-xs">
                                <a href="#!">
                                    <img
                                        className="avatar-img rounded-circle"
                                        src={reply["photo"]}
                                        alt=""
                                        width="40"
                                        height="40"
                                        style={{objectFit:"cover"}}
                                    />
                                </a>
                            </div>
                            <div className="ms-2">
                                <div className="bg-light p-3 rounded">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-1">
                                            {" "}
                                            <a href="#!"> {reply["author"]}</a>{" "}
                                        </h6>
                                        <small className="ms-2">{reply.time}</small>
                                    </div>
                                    <p className="small mb-0">
                                        {reply.content}
                                    </p>
                                </div>
                                <ul className="nav nav-divider py-2 small">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!" onClick={() => {
                                            props.addReplyLike(reply.index, props.index)
                                        }}>
                                            Like {reply.likes}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div >
                ))
            }
            {visibleReplies < props.data?.length && (

                <a href="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true" onClick={loadMoreReplies}>
                    <div className="spinner-dots me-2">
                        <span className="spinner-dot"></span>
                        <span className="spinner-dot"></span>
                        <span className="spinner-dot"></span>
                    </div>
                    Load more replies

                </a>
            )}
            {visibleReplies >= props.data?.length && props.data?.length !== 0 && (

                <a href="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true" onClick={loadLessReplies}>
                    <div className="spinner-dots me-2">
                        <span className="spinner-dot"></span>
                        <span className="spinner-dot"></span>
                        <span className="spinner-dot"></span>
                    </div>
                    Show less replies

                </a>
            )}

        </>
    );
};

export default Replies;