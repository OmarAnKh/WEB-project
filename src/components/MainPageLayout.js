import Music from "./Music"
import Footer from "./Footer"
import RecommendedVideo from './RecommendedVideo'

import TrendingCards from './TrendingVideoSection'
const MainPageLayout = () => {

    return (<>
        <RecommendedVideo/>
        <TrendingCards/>
        <Music />
        <Footer />
    </>)
}
export default MainPageLayout