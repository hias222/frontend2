import { Container } from '@mui/material';

import Iframe from 'react-iframe';
import Header from './Header';
import Footer from './Footer';
import GetUrlPath from '../shared/utilities/getUrlPath';

function Resultlists() {

    var route_path = "splashdata/" + GetUrlPath()
    var local_url = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port
    var base_url = process.env.REACT_APP_SPLASH_URL === undefined ? local_url : process.env.REACT_APP_SPLASH_URL
    var result_url = base_url + "/" + route_path + "/result/index.html"

    console.log(result_url)

    function getAllPages(){
      return  <>
        <Header numberPage={3} detail={GetUrlPath()} />
        <Container maxWidth="lg">
            <Iframe url={result_url}
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


