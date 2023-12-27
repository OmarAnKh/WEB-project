import React from 'react';
import { useFireStore } from "../../../firebase/useFirestore";
import { Link } from 'react-router-dom';
import "./recommendedvideo.css"
function RecommendedVideo() {
    const { data } = useFireStore('RecommendedVideo');
    return (
        <div className="container-xxl px-4 mt-5">
            <div className="row py-5">
                {data.map((item) => (
                    <div key={item.id} className="col-12">
                        <div className="card text-bg-dark">
                            <img src={item.thumbnail} className="card-img" alt="video thumbnail" />
                            <div className="card-img-overlay">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="avatar avatar-xxs me-2">
                                        <img
                                            className="avatar-img rounded-circle"
                                            src={item.photo}
                                            alt="avatar"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <h6 className="mb-0">
                                        <a className="text-white" href="#!">
                                            {item.owner}
                                        </a>
                                        <span className="ms-1 ms-sm-3 small text-white">
                                            {item.views}
                                        </span>
                                    </h6>
                                </div>
                                <h1 className="card-title text-white" >{item.title}</h1>
                                <p className="card-text text-white">{item.subtitle}</p>
                                <Link to={`/PostPageLayout/${item.index}/${item.collection_name}/${item.comments_section} `} className="btn btn-primary" target="blank">
                                    <i className="bi bi-file-earmark-play pe-1"></i>{item.title2}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default RecommendedVideo;