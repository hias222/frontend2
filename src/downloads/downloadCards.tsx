import { Grid, IconButton, InputBase, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react"
import DownloadClub from "./downloadClub";
import DownloadCommon from "./downloadCommon";
import { common, club, downloadData } from "./downloadsType";
import SearchIcon from '@mui/icons-material/Clear'
import GetUrlPath from "../shared/utilities/getUrlPath";
import GetPageName from "../naming/GetPageName";


function DownloadCards() {

    var emptyData: downloadData = {
        common: [{ name: '' }],
        clubs: [{ 'name': '', 'code': '' }]
    }

    const [downloadData, setDownloadData] = useState<downloadData>(emptyData);
    const [clubData, setClubs] = useState<[club]>([{ name: '', code: '0' }]);
    const [common, setCommon] = useState<[common]>([{ name: '' }])

    const [value, setValue] = useState('');

    const prevCountRef = useRef('');
    const prevClubDataRef = useRef<[club]>([{ name: '', code: '0' }]);
    const prevCommonRef = useRef<[common]>([{ name: '' }])

    function filterValuePart(arr: any, part: any) {
        part = part.toLowerCase();
        return arr.filter(function (obj: any) {
            return Object.keys(obj)
                .some(function (k) {
                    if (obj[k] === null) {
                        console.log("nothing found")
                        return null
                    } else {
                        var filterelement = obj[k].toLowerCase().indexOf(part) !== -1 && obj[k].toLowerCase().indexOf(part) !== null;
                        return filterelement
                    }

                });
        });
    }

    function compareArray(array1: any, array2: any) {
        var sarray1 = JSON.stringify(array1);
        var sarray2 = JSON.stringify(array2);

        if (sarray1 === sarray2) return true
        return false
    }

    var route_path = "splashdata/" + GetUrlPath()
    var local_url = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port
    var base_url = process.env.REACT_APP_SPLASH_URL === undefined ? local_url : process.env.REACT_APP_SPLASH_URL
    var json_url = base_url + "/" + route_path + "/downloads.json"


    //getDownloadData()
    useEffect(() => {
        function getDownloadData() {

            console.log('loading Data from ' + json_url)

            fetch(json_url, {cache: "no-cache"})
                .then((result) => result.blob())
                .then((data) => data.text())
                .then(text => {
                    return JSON.parse(text)
                })
                .then(json => {

                    if (!compareArray(downloadData.common, json.common) === true) {
                        setCommon(json.common)
                    }

                    if (!compareArray(downloadData.clubs, json.clubs) === true) {
                        setClubs(json.clubs)
                    }

                    if (downloadData.clubs.length !== json.clubs.length) setDownloadData(json)
                    if (downloadData.clubs.length !== json.clubs.length) {
                        setClubs(json.clubs)
                        prevClubDataRef.current = json.clubs
                    }
                    if (downloadData.common.length !== json.common.length) {
                        prevCommonRef.current = json.common
                        setCommon(json.common)
                    }

                })
                .catch(error => console.log(error))
        }

        if (prevCountRef.current === value) getDownloadData()

        if (prevCountRef.current !== value) {
            var f_club = filterValuePart(prevClubDataRef.current, value);
            var f_common = filterValuePart(prevCommonRef.current, value);

            setClubs(f_club)
            setCommon(f_common)
        }

        prevCountRef.current = value;

        //return ( ) => setDownloadData('') ;
    }, [value, downloadData]);

    function handleSubmit(e: any) {
        setValue(e.target.value)
        //console.log(e.target.value)
    }

    function handleClickSearch() {
        setDownloadData(emptyData)
        setValue('')
        //console.log('Refresh - ' + value);
    }

    //var document_title = process.env.REACT_APP_SITE_TITLE === undefined ? "Timing" : process.env.REACT_APP_SITE_TITLE
    var document_title = GetPageName()

    return (
        <Grid container spacing={{ xs: 1, md: 2 }}>
            <Grid item xs={12} display="flex" justifyContent={'center'}>
                <Typography variant="h6" component="div" gutterBottom align="center">
                    {document_title}
                </Typography>
            </Grid>
            <Grid item xs={3} display="flex"></Grid>
            <Grid item xs={6} display="flex" justifyContent={'center'}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Downloads"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleSubmit}
                    value={value}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleClickSearch}>
                    <SearchIcon />
                </IconButton>
            </Grid>
            <Grid item xs={3} display="flex"></Grid>
            <Grid item xs={12}>
                <Typography sx={{ mb: 1.5 }} color="text.primary" gutterBottom >Allgemein</Typography>
            </Grid>
            <Grid item>
                <DownloadCommon commonData={common}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{ mb: 1.5 }} color="text.primary" gutterBottom>Vereine</Typography>
            </Grid>
            <Grid item>
                <DownloadClub clubData={clubData} />
            </Grid>
        </Grid>
    )

}


export default DownloadCards;