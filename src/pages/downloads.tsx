import DownloadCards from "../downloads/downloadCards"
import GetUrlPath from "../shared/utilities/getUrlPath";
import Footer from "./Footer";
import Header from "./Header";

function Downloads() {

    return (
        <>
        <Header numberPage={4} detail={GetUrlPath()} />
        <DownloadCards />
        <Footer/>
        </>
    );

}


export default Downloads
