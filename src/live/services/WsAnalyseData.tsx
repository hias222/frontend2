import { useEffect, useState } from 'react';
import { eventHeat } from '../../shared/types/EventHeat';

import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import PortableWifiOffIcon from '@mui/icons-material/PortableWifiOff';
import { Grid, Typography } from '@mui/material';
import { BaseFrontendComponent } from '../components/BaseFrontendComponent';
import { LaneState } from '../../shared/state/LaneState';

function WkAnalyseData(model: { message: string, connected: boolean, lanes: [LaneState], header: eventHeat, runningtime: string }) {

    const [connectstate, setConnectstate] = useState<boolean>(false)


    useEffect(() => {

        console.log('WSAnalyseData useEffect')

        setConnectstate(model.connected)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [model.message, model.connected, model.lanes, model.header]);

    let connect_status = connectstate === true ? <SignalWifiStatusbar4BarIcon /> : <PortableWifiOffIcon />

    function getDataMapper() {
        if (connectstate) {
            return (<Grid item xs={12}>
                <BaseFrontendComponent
                    startdelayms={100}
                    EventHeat={model.header}
                    lanes={model.lanes}
                    displayMode='race'
                    runningTime={model.runningtime}
                />
            </Grid>)
        } else {
            return (
                <div>
                    <Grid item  >
                        <Typography sx={{ mb: 1.0 }} color="text.primary" gutterBottom align="center">
                            Keine Verbindung zur Zeitnahme
                        </Typography>
                    </Grid>
                </div>)
        }
    }

    return (
        <Grid container justifyContent="center">
            <Grid item xs={10} display="flex" justifyContent={'center'}>
                <Typography variant="h6" component="div" gutterBottom align="center">
                    {model.header.competition}
                </Typography>
            </Grid>
            <Grid item xs={2} display="flex" justifyContent={'flex-end'}>
                {connect_status}
            </Grid>

            {getDataMapper()}

        </Grid>

    );
}

export default WkAnalyseData;