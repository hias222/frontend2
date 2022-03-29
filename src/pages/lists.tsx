import { Container } from '@mui/material';
import React from 'react';

import Iframe from 'react-iframe';

export default class lists extends React.Component<{}, {}> {

    render() {
        return (
            <Container maxWidth="lg">
                <Iframe url="https://d28o763yj8kyv0.cloudfront.net"
                    height="1000"
                    width="100%"
                    id="myId"
                    display="inline"
                />
            </Container>
        )
    }

}