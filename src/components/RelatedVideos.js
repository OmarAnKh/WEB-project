import { useFireStore } from "../firebase/useFirestore";
import VideoPlayer from "./VideoPlayer";
import './OmarCompStyle.css'
import { Link } from "react-router-dom";
const RelatedVideos = () => {
    const { data } = useFireStore("relatedVidoes");


    return (
        <div className="container my-5 py-5">
            <div className="row justify-content-center">
                {data?.map((video) => (
                    <div className="col-md-4 mb-4" key={video.id} >
                        <div className="card" style={{ border: "none" }} >
                            <div>
                                <VideoPlayer videoUrl={video.link} thumbnailUrl={video.thumbnail} publication_time={video.publication_time} time={video.time} />
                            </div>
                            <div className="card-footer bg-white" style={{ border: "0" }}>
                                <div className="d-flex align-items-center">
                                    <img
                                        className="rounded-circle shadow-1-strong me-2"
                                        src={video.photo}
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                    />
                                    <div className="card-body">
                                        <b className="card-title" style={{ fontSize: "17px", marginBottom: 0, marginTop: "5px" }}>
                                            {video.owner}
                                            <i className={video.check} style={{ color: "#32BD88", marginLeft: "5px" }} ></i>
                                        </b>
                                    </div>
                                    <div className="ml-auto" style={{ marginTop: "5px" }}>
                                        <pre style={{ marginBottom: 0 }}>{video.views} views</pre>
                                    </div>
                                </div>
                                <Link to={`/PostPageLayout/${video.index}/${video.collection_name}/${video.comments_section} `} className="card-text" target="blank">
                                    {video.title}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedVideos;