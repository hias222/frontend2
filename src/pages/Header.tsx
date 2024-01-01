import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ListIcon from '@mui/icons-material/ListOutlined';
import HomeIcon from '@mui/icons-material/Home';
import Downloads from '@mui/icons-material/Download';
import History from '@mui/icons-material/History';

export default function Header(props: {
    numberPage: number, detail?: string
}) {
    //export default function Navigation() {
    const [value, setValue] = React.useState(props.numberPage);
    const [details, setDetail] = React.useState(props.detail);

    return (
        <BottomNavigation
            onChange={(event, newValue) => {
                setValue(newValue);
                console.log("button " + newValue)
            }}
            showLabels
            value={value}
        >
            <BottomNavigationAction component={Link} label="Home" to="/start" icon={<HomeIcon />} />
            <BottomNavigationAction component={Link} label="List" to={"/lists/" + details} icon={<ListIcon />} />
            {/*<BottomNavigationAction href="/frontend/live" label="Live" value="/frontend/live" icon={<LiveIcon />} />*/}
            {/* BottomNavigationAction href="/frontend/heats" label="Läufe" value="/frontend/heats" icon={<HeatsIcon />} /> */}
            {/* <BottomNavigationAction href="/frontend/downloads" label="Downloads" value="/frontend/downloads" icon={<Downloads />} /> */}
            <BottomNavigationAction component={Link} label="History" to={"/history/" + details} icon={<History />} />
        </BottomNavigation>
    );
}