import { useState } from "react";
import { useFireStore } from "../firebase/useFirestore";
import VideoPlayer from "./OfficialTrailerPlayer";
import './OmarCompStyle.css'
import { Link } from "react-router-dom";

const OfficialTrailer = () => {
    const { data } = useFireStore("OfficialTrailer");
    const [loadMore, setLoadMore] = useState(3);

    const loadMoreVideos = () => {
        setLoadMore((prevCount) => prevCount + 2);
    };

    return (
        <div className="container my-4" >
            <div className="d-flex justify-content-between">
                <h3>Official Trailers</h3>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={loadMoreVideos}
                    style={{ marginBottom: "5px" }}
                >
                    View more videos
                </button>
            </div>

            <div className="row justify-content-left" >
                {data?.slice(0, loadMore).map((video) => (
                    <div className="col-md-4 mb-4" key={video?.id}>
                        <div className="card" style={{ border: "none", height: "100%" }}>
                            <div>
                                <VideoPlayer link={video?.MainLink} />
                            </div>
                            <div className="card-footer bg-white" style={{ border: "0" }}>
                                <div className="d-flex align-items-center">
                                    <div className="card-body">
                                        <Link to={`/PostPageLayout/${video.index}/${video?.collection_name}/${video?.comments_section} `} className="card-text" target="blank">
                                            {video?.title}
                                        </Link>
                                    </div>
                                </div>
                                <img
                                    className="rounded-circle shadow-1-strong me-2"
                                    src={video?.photo}
                                    alt="avatar"
                                    width={40}
                                    height={40}
                                />
                                <b className="card-title" style={{ fontSize: "17px", marginBottom: 0, marginTop: "5px" }}>
                                    {video?.owner}
                                    <i className={video?.check} style={{ color: "#32BD88", marginLeft: "5px" }} ></i>

                                </b>
                                <div className="ml-auto" style={{ marginTop: "5px", marginLeft: "12%" }}>
                                    <pre style={{ marginBottom: 0 }}>{video?.views} views</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfficialTrailer;