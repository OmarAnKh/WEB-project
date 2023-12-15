import Post from "./Post"
import RelatedVideos from "./RelatedVideos"
import './OmarCompStyle.css'
import { useParams } from "react-router-dom"
import { useFireStore } from "../firebase/useFirestore"

const PostPageLayout = () => {
    const { collection_name } = useParams('collection_name')
    const { comments_section } = useParams('comments_section')
    const { id } = useParams('id')
    const temp = useFireStore(comments_section).data
    const { data } = useFireStore(collection_name)

    const comments = temp
    const video = data[id]

    return (
        <div className="container">
            <Post video={video} collection_name={collection_name} id={id} comments={comments} comments_section={comments_section} />
            <div
                className="card-footer  "
                style={{ backgroundColor: "#F8F9FA", borderRadius: "10px", padding: "20px", border: "1px solid rgb(210,210,210)" }}>
                <h3  > Related Videos</h3>
                <RelatedVideos />
            </div>
        </div>
    )
}
export default PostPageLayout