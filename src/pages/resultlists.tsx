import { Container } from '@mui/material';

import Iframe from 'react-iframe';

function Resultlists() {

    return (
        <div>
            <Container maxWidth="lg">
                <Iframe url="https://d28o763yj8kyv0.cloudfront.net"
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