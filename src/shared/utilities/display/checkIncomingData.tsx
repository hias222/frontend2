function checkIncoming(jsondata: any): string {
    //console.log(jsondata)
    var messageType = jsondata.type
    //console.log("WsAnalyseData Type: " + messageType)
    switch (messageType) {
        case "start": {
            return 'start'
        }
        case "stop": {
            return 'stop'
        }
        case "header": {
            return 'header'
        }
        case "lane": {
            return 'lane'
        }
        case "clear": {
            return 'clear'
        }
        case "startlist": {
            return 'mode'
        }
        case "race": {
            return 'mode'
        }
        case "clock": {
            return 'mode'
        }
        case "time": {
            return 'time'
        }
        default: {
            return 'not_used'
        }
    }
}

export default checkIncoming;