import { eventHeat } from "../../types/EventHeat"
import getSwimStyles from "../getSwimStyles"

function setHeaderInfo(message: any): eventHeat {

    var headerdata: eventHeat = { eventnr: '0', heatnr: '0', name: '' }

    if (message.event !== undefined) {
        headerdata.eventnr = message.event
    }

    if (message.heat !== undefined) {
        headerdata.heatnr = message.heat
    }

    if (message.competition !== undefined) {
        // wir kuerzen
        headerdata.competition = message.competition.substring(0,26)
    } else {
        headerdata.competition = "Ergebnisdienst"
    }

    if (message.distance !== undefined) {
        headerdata.distance = message.distance
    }

    if (message.gender !== undefined) {
        headerdata.gender = message.gender
    }

    if (message.relaycount !== undefined) {
        headerdata.relaycount = message.relaycount
    }

    if (message.round !== undefined) {
        headerdata.round = message.round
    }

    if (message.swimstyle !== undefined && message.distance !== undefined && message.relaycount === '1') {
        headerdata.swimstyle = getSwimStyles(message.swimstyle)
        headerdata.name = message.distance + "m" + " " + getSwimStyles(message.swimstyle)
    }

    //Staffel

    if (message.swimstyle !== undefined && message.distance !== undefined && message.relaycount !== '1') {
        headerdata.swimstyle = getSwimStyles(message.swimstyle)
        headerdata.name = message.relaycount + "x " + message.distance + "m" + " " + getSwimStyles(message.swimstyle)
    }

    return headerdata

}

export default setHeaderInfo


/*  function setHeaderInfo(jsondata: any) {

        if (jsondata.heat !== eventheat.heatnr || jsondata.event !== eventheat.eventnr) {

            setDisplayMode('startlist')
            var swimstyle = (typeof (jsondata.name) !== "undefined" && jsondata.name)
                ? jsondata.name : jsondata.distance + "m " + getSwimStyles(jsondata.swimstyle)

            setEventHeat(
                {
                    name: swimstyle,
                    eventnr: jsondata.event,
                    heatnr: jsondata.heat,
                    competition: jsondata.competition,
                    distance: jsondata.distance,
                    gender: jsondata.gender,
                    relaycount: jsondata.relaycount,
                    round: jsondata.round,
                    swimstyle: jsondata.swimstyle
                })

            setJsonData(jsondata)
            setCompetitionName(jsondata.competition)

            console.log('WSAnaylseData ------> Heat' + jsondata.heat)

        } else {
            console.log("header no event or heat change ")
        }
        //setTimeout(this.activatePage, 500);
    } */