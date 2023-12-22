import Post from "./Post"
import RelatedVideos from "./RelatedVideos"
import './OmarCompStyle.css'
import { useParams } from "react-router-dom"
import { useFireStore } from "../firebase/useFirestore"
import NavbarPost from './NavbarPost'
const PostPageLayout = () => {
    const { collection_name } = useParams('collection_name')
    const { comments_section } = useParams('comments_section')
    const { id } = useParams('id')
    const comments = useFireStore(comments_section).data
    const { data } = useFireStore(collection_name)


    const video = data[id]

    return (

        <div>
            <NavbarPost />
            <div className="container">

                <Post video={video} collection_name={collection_name} id={id} comments={comments} comments_section={comments_section} />
                <div
                    className="card-footer  "
                    style={{ backgroundColor: "#F8F9FA", borderRadius: "10px", padding: "20px", border: "1px solid rgb(210,210,210)", marginTop: "20px" }}>
                    <h4 > Related Videos</h4>
                    <RelatedVideos />
                </div>
            </div>
        </div>
    )
}
export default PostPageLayout