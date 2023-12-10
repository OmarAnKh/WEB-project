const Replies = (props) => {

    const test = props.data;
    console.log(test)


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
                                width="65"
                                height="65"
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
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default Replies;