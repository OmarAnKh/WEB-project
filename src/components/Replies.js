import './OmarCompStyle.css'
const Replies = (props) => {

    const test = props.data;

    return (
        <>

            {

                test?.map((reply, index) => (

                    <div key={index}>
                        <div className="d-flex"></div>

                        <div className="d-flex" key={index}>
                            <div className="avatar avatar-xs">
                                <a href="#!">
                                    <img
                                        className="avatar-img rounded-circle"
                                        src={reply["photo"]}
                                        alt=""
                                        width="40"
                                        height="40"
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
                                        <a className="nav-link" href="#!">
                                            Like {reply.likes} &bull;
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            {" "}
                                            Reply
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div >
                ))
            }
        </>
    );
};

export default Replies;