import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ListIcon from '@mui/icons-material/ListOutlined';
import ResultIcon from '@mui/icons-material/SportsScore';
import HomeIcon from '@mui/icons-material/Home';
import Downloads from '@mui/icons-material/Download';
import History from '@mui/icons-material/History';
import GetUrlPath from '../shared/utilities/getUrlPath';

export default function Header(props: {
    numberPage: number, detail?: string, show?: boolean
}) {
    //export default function Navigation() {
    const [value, setValue] = React.useState(props.numberPage);
    const [details, setDetail] = React.useState(props.detail);

    var showHeader: boolean = props.show === undefined ? showHeader = true : props.show

    function chooseLinks() {
        //return getAllLinks()
        if (GetUrlPath() !== undefined) {
            return getAllLinks()
        } else {
            return getBaseLinks()
        }
    }

    function getAllLinks() {
        return <BottomNavigation
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            value={value}
        >
            <BottomNavigationAction component={Link} label="Home" to="/start" icon={<HomeIcon />} />
            <BottomNavigationAction component={Link} label="List" to={"/lists/" + details} icon={<ListIcon />} />
            {/* <BottomNavigationAction component={Link} label="Result" to={"/results/" + details} icon={<ResultIcon />} /> */}
            {/*<BottomNavigationAction href="/frontend/live" label="Live" value="/frontend/live" icon={<LiveIcon />} />*/}
            {/* BottomNavigationAction href="/frontend/heats" label="Läufe" value="/frontend/heats" icon={<HeatsIcon />} /> */}
            <BottomNavigationAction component={Link} label="Downloads" to={"/downloads/" + details} icon={<Downloads />} />
            <BottomNavigationAction component={Link} label="History" to={"/history/" + details} icon={<History />} />
            
        </BottomNavigation>
    }

    function homeButton() {
        if (showHeader) {
            return <BottomNavigationAction component={Link} label="Home" to="/start" icon={<HomeIcon />} />
        }
    }

    function getBaseLinks() {
        console.log(showHeader)
        return <BottomNavigation
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            value={value}
        >
            {homeButton()}
            {/* <BottomNavigationAction component={Link} label="History" to={"/history/" + details} icon={<History />} /> */}
        </BottomNavigation>
    }


    return (
        chooseLinks()
    );
}