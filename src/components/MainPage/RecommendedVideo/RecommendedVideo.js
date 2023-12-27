import React from 'react';
import { useFireStore } from "../../../firebase/useFirestore";
import { Link } from 'react-router-dom';
function RecommendedVideo() {
    const { data } = useFireStore('RecommendedVideo');
    return (
        <div className="container-xxl px-4 mt-5">
            <div className="row py-5">
                {data.map((item) => (
                    <div key={item.id}  >
                        <div className="rounded py-4 py-sm-5  position-relative" >
                        <img src={item.thumbnail} className="card-img position-absolute top-0 start-0 w-100 h-100" alt="thumbnail" style={{filter: 'brightness(60%)' , borderRadius: '0.5rem'}}/>
                            <div className="p-4 p-sm-5 position-relative">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="avatar avatar-xxs me-2">
                                    <img className="avatar-img rounded-circle" src={item.photo} alt="avatar" style={{objectFit:"cover" , height: '3rem', width:' 3rem'}}/>
                                    </div>
                                    <h6 className="mb-0">
                                        <span className="text-white">{item.owner} </span>
                                        <span className="ms-1 ms-sm-3 small text-white">{item.views} </span>
                                    </h6>
                                </div>
                                <h1 className="card-title text-white mb-3" >{item.title}</h1>
                                <p className="card-text text-white mb-3">{item.subtitle}</p>
                                <div className="d-flex align-items-center mt-3">
                                    <Link to={`/PostPageLayout/${item.index}/${item.collection_name}/${item.comments_section}`} className="btn btn-primary " target="blank">
                                    <i className="bi bi-file-earmark-play pe-1 "></i>{item.title2}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default RecommendedVideo;
