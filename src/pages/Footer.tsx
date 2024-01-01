import { BottomNavigation, BottomNavigationAction, Button, Typography } from '@mui/material';
import React from 'react';

import Info from '@mui/icons-material/InfoRounded';
import { Link } from 'react-router-dom';
import GetUrlPath from '../shared/utilities/getUrlPath';

export default function Footer() {
    //export default function Navigation() {
    //const [value, setValue] = React.useState(props.numberPage);
    //const [details, setDetail] = React.useState(props.detail);

    return (
        <BottomNavigation>
            <BottomNavigationAction component={Link} label="Info" to={"/info/" + GetUrlPath()} icon={<Info />} sx={{ md: 0 }} />
            <Typography color="text.primary" sx={{ mt: 1 }}><Button variant="text" href="http://www.sgfuerth.de" target={'_blank'}>www.sgfuerth.de</Button></Typography>
        </BottomNavigation>
    );
}

/*
export type HeaderState = {
    value: string;
};

export default class Footer extends React.Component<{}, HeaderState> {

    constructor(props: {}) {
        super(props);

        if (window.location.pathname === '/frontend/' || window.location.pathname === '/frontend') {
            this.state = {
                value: '/frontend/lists'
            }

        } else {
            // the first
            this.state = {
                value: window.location.pathname
            }
        }
    }

    //REACT_APP_SITE_TITLE

    render() {

        console.log("path " + window.location.pathname + " - " + this.state.value)
        return (<div>
            <BottomNavigation
                value={this.state.value}
            >
                <BottomNavigationAction href="/frontend/info" label="Info" value="/frontend/info" icon={<Info />} sx={{ md: 0 }} />
                <Typography color="text.primary" sx={{ mt: 1 }}><Button variant="text" href="http://www.sgfuerth.de" target={'_blank'}>www.sgfuerth.de</Button></Typography>
            </BottomNavigation>
        </div>
        );
    }
}
*/
