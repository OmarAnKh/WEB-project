import Music from "./Music/Music"
import Footer from "./Footer/Footer"
import RecommendedVideo from './RecommendedVideo/RecommendedVideo'
import TrendingCards from './TrendingVideo/TrendingVideoSection'
import MainPageNavBar from "./NavBar/MainPageNavBar"
import OfficialTrailer from "./OfficialTrailer/OfficialTrailer"
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