
import { useFireStore } from "../firebase/useFirestore";
import Replies from "./Replies";
import './OmarCompStyle.css'
const Comments = (props) => {
    const data = props.comments
    const test = data.comments;
    console.log(test)
    return (
        <section className="gradient-custom">
            {test?.map((comment) => (
                <div className="container my-3 " key={comment.comment.id}>
                    <div className="row d-flex ">
                        <div className="">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="text-center"></h4>
                                    <div className="row">
                                        <div className="col">
                                            <div className="d-flex flex-start">
                                                <img className="rounded-circle shadow-1-strong me-3"
                                                    src={comment.comment.photo} alt="avatar" 
                                                    width="70"
                                                    height="50" />
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
                                                        <div className=" col ">

                                                            <i className="far fa-thumbs-up me-2" />
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16" style={{ color: "gray" }}    >
                                                                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                                            </svg>
                                                            <pre className="mb-0" style={{ fontSize: "12px", color: "gray", display: "inline" }}> Like {comment.comment.likes} &bull; </pre>
                                                            <i className="far fa-thumbs-up me-2" />
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16" style={{ color: "gray" }}>
                                                                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15" />
                                                            </svg>
                                                            <pre className="mb-0" style={{ fontSize: "12px", color: "gray", display: "inline" }}> Reply  &bull; </pre>
                                                            <i className="far fa-thumbs-up me-2" />
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16" style={{ color: "gray" }}>
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                            </svg>
                                                            <pre className="mb-0" style={{ fontSize: "12px", color: "gray", display: "inline" }}> Views {comment.comment.views}</pre>
                                                        </div>
                                                    </div>
                                                    <Replies data={comment.replies} />
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