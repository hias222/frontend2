import { BottomNavigation, BottomNavigationAction, Box, Grid } from '@mui/material';
import React from 'react';

import LiveIcon from '@mui/icons-material/LiveTv';
import ListIcon from '@mui/icons-material/ListOutlined';
import Downloads from '@mui/icons-material/Download';
import Info from '@mui/icons-material/InfoRounded';


export type HeaderState = {
    value: string;
};

export default class Header extends React.Component<{}, HeaderState> {

    constructor(props: {}) {
        super(props);

        if (window.location.pathname === '/frontend/' || window.location.pathname === '/frontend') {
            this.state = {
                value: '/frontend/live'
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
                <BottomNavigationAction href="/frontend/lists" label="List" value="/frontend/lists" icon={<ListIcon />} />
                <BottomNavigationAction href="/frontend/live" label="Live" value="/frontend/live" icon={<LiveIcon />} />
                {/* BottomNavigationAction href="/frontend/heats" label="Läufe" value="/frontend/heats" icon={<HeatsIcon />} /> */}
                <BottomNavigationAction href="/frontend/downloads" label="Downloads" value="/frontend/downloads" icon={<Downloads />} />
            </BottomNavigation>
        </div>
        );
    }
}

