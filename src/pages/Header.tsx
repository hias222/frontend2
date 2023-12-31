import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';

import ListIcon from '@mui/icons-material/ListOutlined';
import HomeIcon from '@mui/icons-material/Home';
import Downloads from '@mui/icons-material/Download';
import History from '@mui/icons-material/History';


export type HeaderState = {
    value: string;
};

export default class Header extends React.Component<{}, HeaderState> {

    constructor(props: {}) {
        super(props);

        if (window.location.pathname === '/frontend/' || window.location.pathname === '/frontend') {
            this.state = {
                value: '/frontend/start'
            }

        } else {
            // the first
            this.state = {
                value: window.location.pathname
            }
        }
    }

    //REACT_APP_SITE_TITLE

    getDefaultHeader() {
        return (<div>
            <BottomNavigation
                value={this.state.value}
            >
                <BottomNavigationAction href="/frontend/start" label="Home" value="/frontend/start" icon={<HomeIcon />} />
                <BottomNavigationAction href="/frontend/lists" label="List" value="/frontend/lists" icon={<ListIcon />} />
                {/*<BottomNavigationAction href="/frontend/live" label="Live" value="/frontend/live" icon={<LiveIcon />} />*/}
                {/* BottomNavigationAction href="/frontend/heats" label="Läufe" value="/frontend/heats" icon={<HeatsIcon />} /> */}
                {/* <BottomNavigationAction href="/frontend/downloads" label="Downloads" value="/frontend/downloads" icon={<Downloads />} /> */}
                <BottomNavigationAction href="/frontend/history" label="History" value="/frontend/history" icon={<History />} />
            </BottomNavigation>
        </div>
        );
    }

    getWKHeader() {
        return (<div>
            <BottomNavigation
                value={this.state.value}
            >
                <BottomNavigationAction href="/frontend/start" label="Home" value="/frontend/start" icon={<HomeIcon />} />
                <BottomNavigationAction href="/frontend/lists" label="List" value="/frontend/lists" icon={<ListIcon />} />
                {/*<BottomNavigationAction href="/frontend/live" label="Live" value="/frontend/live" icon={<LiveIcon />} />*/}
                {/* BottomNavigationAction href="/frontend/heats" label="Läufe" value="/frontend/heats" icon={<HeatsIcon />} /> */}
                {/* <BottomNavigationAction href="/frontend/downloads" label="Downloads" value="/frontend/downloads" icon={<Downloads />} /> */}
                <BottomNavigationAction href="/frontend/history" label="History" value="/frontend/history" icon={<History />} />
            </BottomNavigation>
        </div>
        );
    }

    render() {
        return this.getDefaultHeader();
    }
}

