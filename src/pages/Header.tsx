import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';

import LiveIcon from '@mui/icons-material/LiveTv';
import ListIcon from '@mui/icons-material/ListOutlined';
import HeatsIcon from '@mui/icons-material/Update';


export type HeaderState = {
    value: string;
};

export default class Header extends React.Component<{}, HeaderState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            value: window.location.pathname
        }
    }

    render() {
        console.log("path " + window.location.pathname + " - " + this.state.value)
        return (
            <BottomNavigation
                value={this.state.value}
                //showLabels
            >
                <BottomNavigationAction href="/frontend/live" label="Live" value="/frontend/live" icon={<LiveIcon />} />
                <BottomNavigationAction href="/frontend/heats" label="Läufe" value="/frontend/heats" icon={<HeatsIcon />} />
                <BottomNavigationAction href="/frontend/lists" label="List" value="/frontend/lists" icon={<ListIcon />} />
            </BottomNavigation>
        );
    }
}

