import { Grid, IconButton, InputBase, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react"
import DownloadClub from "./downloadClub";
import DownloadCommon from "./downloadCommon";
import { common, club, downloadData } from "./downloadsType";
import SearchIcon from '@mui/icons-material/Clear'


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
                    return obj[k].toLowerCase().indexOf(part) !== -1;
                });
        });
    }

    //getDownloadData()
    useEffect(() => {

        var download_url = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/frontend/downloads.json"

        function getDownloadData() {

            console.log('loading Data from ' + download_url)

            fetch(download_url)
                .then((result) => result.blob())
                .then((data) => data.text())
                .then(text => JSON.parse(text))
                .then(json => {
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

    var document_title = process.env.REACT_APP_SITE_TITLE === undefined ? "Timing" : process.env.REACT_APP_SITE_TITLE


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