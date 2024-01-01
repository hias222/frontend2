import { Container } from '@mui/material';

import Iframe from 'react-iframe';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Resultlists() {

    var route_path = "splashdata/" + GetUrlPath()
    var local_url = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port
    var base_url = process.env.REACT_APP_SPLASH_URL === undefined ? local_url : process.env.REACT_APP_SPLASH_URL
    var splash_url = base_url + "/" + route_path + "/index.html"

    console.log(splash_url)

    function GetUrlPath(): string {
        const params = useParams();
        if (params.base !== "" && params.base !== undefined) {
            return params.base
        } else {
            return ""
        }
    }

    function getAllPages(){
      return  <>
        <Header numberPage={1} detail={GetUrlPath()} />
        <Container maxWidth="lg">
            <Iframe url={splash_url}
                height="1000"
                width="100%"
                id="myId"
                display="inline"
            />
        </Container>
        <Footer/>
    </>
    }

    return (
         getAllPages()
    );

}

export default Resultlists


