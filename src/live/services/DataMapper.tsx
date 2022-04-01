import { useEffect, useState } from 'react';
import { eventHeat } from '../..//shared/types/EventHeat';
import { LaneState } from '../../shared/state/LaneState'
import { BaseFrontendComponent } from '../components/BaseFrontendComponent';


//function DataMapper({ jsonData }: { jsonData: any }, { DisplayMode }: { DisplayMode: string },
//  { heatNumber }: { heatNumber: string }, { eventNumber }: { eventNumber: string }) {
function DataMapper(model: { 
    CompetitionName: string;
    jsonData: any; 
    DisplayMode: string; 
    heatNumber: string; 
    eventNumber: string 
}) {

    const [eventHeat, setEventHeat] = useState<eventHeat>({ eventnr: '0', heatnr: '0', name: '' });

    console.log(model.eventNumber + " - " + model.heatNumber)

    useEffect(() => {

        let evenHeat2: eventHeat = {
            name: model.CompetitionName,
            heatnr: model.heatNumber,
            eventnr: model.eventNumber
        }

        console.log(evenHeat2 + " - " + model.heatNumber)

        setEventHeat(evenHeat2);

    }, [model]);

    return (
        <div className="message-list">
            <BaseFrontendComponent
                startdelayms={100}
                EventHeat={eventHeat}
                lanes={[]}
                displayMode={''}
                runningTime={'100'}
            />
        </div>
    );
}

export default DataMapper;