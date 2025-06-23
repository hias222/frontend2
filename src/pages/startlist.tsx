import { Container } from '@mui/material';

import Iframe from 'react-iframe';
import Header from './Header';
import Footer from './Footer';
import GetUrlPath from '../shared/utilities/getUrlPath';
import GetResultUrl from '../shared/utilities/getResultUrl';

function StartLists() {

    var local_url = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port
    var base_url = process.env.REACT_APP_SPLASH_URL === undefined ? local_url : process.env.REACT_APP_SPLASH_URL
    var splash_url = GetResultUrl(base_url, GetUrlPath())


    console.log(splash_url)

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

export default StartLists


