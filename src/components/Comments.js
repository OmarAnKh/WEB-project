import Replies from "./Replies";
import './OmarCompStyle.css'

const Comments = (props) => {

    const comments = props?.comments
    const videoComments = comments[props?.id]?.comments;
    if (props.state) {
        return (
            <section className="gradient-custom">

                {videoComments?.map((comment) => (
                    <div className="container my-3 " key={props.id}>
                        <div className="row d-flex ">
                            <div className="">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="d-flex position-relative">
                                                <div className="avatar avatar-xs">
                                                    <a href="#!">
                                                        <img
                                                            className="avatar-img rounded-circle"
                                                            src={comment.comment.photo}
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
                                                                <a href="#!"> {comment.comment.author} </a>
                                                            </h6>
                                                            <small className="ms-2">{comment.comment.time}</small>
                                                        </div>
                                                        <p className="small mb-0">
                                                            {comment.comment.content}.
                                                        </p>
                                                    </div>
                                                    <ul className="nav nav-divider py-2 small">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!">
                                                                {" "}
                                                                Like {comment.comment.likes} &bull;
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!">
                                                                {" "}
                                                                Reply
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!">
                                                                {" "}
                                                                View {comment.comment.views} replies
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Replies data={comment.replies} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
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