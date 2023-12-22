import Music from "./Music"
import Footer from "./Footer"
import RecommendedVideo from './RecommendedVideo'

import TrendingCards from './TrendingVideoSection'
import MainPageNavBar from "./MainPageNavBar"
import OfficialTrailer from "./OfficialTrailer"
const MainPageLayout = () => {

    return (<>
        <MainPageNavBar />

        <RecommendedVideo />
        <TrendingCards />
        <OfficialTrailer />
        <Music />
        <Footer />
    </>)
}
export default MainPageLayout