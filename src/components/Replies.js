import './OmarCompStyle.css'
const Replies = (props) => {

    const test = props.data;

    return (
        <>
            {
                test?.map((reply, index) => (
                    <div className="d-flex flex-start mt-4" key={index}>
                        <a className="me-3" href="#">
                            <img
                                className="rounded-circle shadow-1-strong"
                                src={reply["photo"]}
                                alt="avatar"
                                width="40"
                                height="40"
                            />
                        </a>
                        <div className="flex-grow-1 flex-shrink-1">
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="mb-1">
                                        {reply["auther"]}
                                    </h5>
                                    <span className="small"> {reply.time}</span>
                                </div>
                                <p className="small mb-0">{reply.content}</p>
                                <div  className=" col ">

                                    <i className="far fa-thumbs-up me-2" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16" style={{ color: "gray" }}  >
                                        <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                    </svg>
                                    <pre className="mb-0" style={{ fontSize: "12px", color: "gray", display: "inline" }}> Like {reply.likes} &bull; </pre>
                                    <i className="far fa-thumbs-up me-2" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16" style={{ color: "gray" }}>
                                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15" />
                                    </svg>
                                    <div className="mb-0" style={{ fontSize: "12px", color: "gray", display: "inline" }}> Reply</div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </>
    );
};

export default Replies;