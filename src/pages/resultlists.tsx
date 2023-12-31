import { Container } from '@mui/material';

import Iframe from 'react-iframe';

function Resultlists() {

    var wk_name = "masters"
    var route_path = "splashdata/" + wk_name
    var local_url =window.location.protocol + "//" + window.location.hostname + ":" + window.location.port
    var base_url= process.env.REACT_APP_SPLASH_URL === undefined ? local_url : process.env.REACT_APP_SPLASH_URL
    var splash_url = base_url + "/" + route_path + "/index.html"

    console.log(splash_url)

    return (
        <div>
            <Container maxWidth="lg">
                <Iframe url={splash_url}
                    height="1000"
                    width="100%"
                    id="myId"
                    display="inline"
                />
            </Container>
        </div>
    );

}


export default Resultlists

/*
 <Container maxWidth="lg">
                <Iframe url="https://d28o763yj8kyv0.cloudfront.net"
                    height="1000"
                    width="100%"
                    id="myId"
                    display="inline"
                />
            </Container>
            */