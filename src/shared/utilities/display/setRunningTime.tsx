function setRunningTime(timemessage: any) {

    //console.log(timemessage)

    if (timemessage.type !== "undefined" || timemessage.value !== "undefined") {
        return (timemessage.value)
    } else {
        return ("0")
    }

}

export default setRunningTime

/*     function setStartMode(startdelay: number) {
        var calcstartdelay = typeof (startdelay) != 'undefined' ? startdelay : 100
        console.log('startdelay ' + calcstartdelay)
        //if (this.state.DisplayMode === 'message' || this.state.DisplayMode === 'clock' || this.state.DisplayMode === 'video') {
        setDisplayMode('startlist')
        //}
        setStartdelayms(calcstartdelay)
    }

    function setRunningTimeString(time: any) {
        if (time.value === "undefined" || !time.value) {
            setRunningTime("0")
        } else {
            setRunningTime(time.value);
        }
    }
 */