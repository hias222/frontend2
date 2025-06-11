import { LaneState } from "../../state/LaneState"

function setLaneInfo(lanes: [LaneState], message: any): [LaneState] {
    var laneNumbner = message.lane
    var laneNr: number = parseInt(laneNumbner)
    var lanedata = setLaneSingleLane(message)
    console.log(lanes.length)

    if (laneNr > lanes.length) {
        //console.log('new ' + laneNr + ' ' + lanes.length)
        var newLanes: [LaneState] = [{ changed: 0, lane: laneNumbner, laptime: '0', place: '', finishtime: '', islaptime: false, swimmerData: { clubid: '', clubname: '', name: '' } }]
        //console.log(newLanes)

        for (var i = 0; i < lanes.length; i++) {
            newLanes.push(lanes[i])
        }
        newLanes.push(lanedata)
        newLanes.shift() // remove first lane

        return newLanes
    } else {
        // richtige Stelle finden
        lanes[laneNr-1] = lanedata

        return lanes
    }
}


function setLaneSingleLane(jsondata: any): any {
    //locklanes = true;

    console.log('WSAnalyseData setLaneInfo ' + jsondata.lane + ' ' + jsondata.place)
    if (jsondata.place === '0') {
        var laptime = "{ \"laptime\": \"" + Date.now() + "\",\"lap\": \"true\" }"
        var newjsondata = { ...jsondata, ...JSON.parse(laptime) }
        return newjsondata
    } else {
        var laptime2 = "{ \"lap\": \"false\" }"
        var newjsondata2 = { ...jsondata, ...JSON.parse(laptime2) }
        return (newjsondata2)
    }
}

export default setLaneInfo