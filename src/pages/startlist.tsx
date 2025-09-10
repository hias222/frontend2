import { Button, Container } from '@mui/material';

import Iframe from 'react-iframe';
import Header from './Header';
import Footer from './Footer';
import GetUrlPath from '../shared/utilities/getUrlPath';
import Downloads from '@mui/icons-material/Refresh';
import GetClubUrl from '../shared/utilities/getClubUrl';
import { useState } from 'react';

function StartLists() {

    var local_url = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port
    var base_url = process.env.REACT_APP_SPLASH_URL === undefined ? local_url : process.env.REACT_APP_SPLASH_URL
    var splash_url = GetClubUrl(base_url, GetUrlPath())


    console.log(splash_url)


    const [random, setRandom] = useState(0);

    function resetIframe() {
        setRandom(random + 1);
    }

    function getAllPages() {
        return <>
            <Header numberPage={2} detail={GetUrlPath()} />
            <Container maxWidth="lg" disableGutters>
                <div style={{ display: 'flex', justifyContent: 'right', marginBottom: 0.5 }}>
                    <Button variant="contained" color="primary" onClick={resetIframe}>
                        {<Downloads />}
                    </Button>
                </div>
                <Iframe
                    url={splash_url}
                    height="1000"
                    width="100%"
                    id="myId"
                    display="inline"
                    key={random.toString()} // This will force the iframe to reload when 'random' changes
                />
            </Container>
            <Footer />
        </>
    }


    return (
        getAllPages()
    );

}

export default StartLists


