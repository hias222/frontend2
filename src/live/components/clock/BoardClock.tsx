import React from 'react'

import Clock from 'react-clock'
//import Clock from 'react-clock';

import classnames from 'classnames';


interface ClockInterface {
    unixcompetitiontime: string,
    type: string
}

export type ClockState = {
    unixcompetitiontime: number,
    startcompetition: number,
    hourHandWidth: number,
    minuteHandWidth: number,
    datestart: number,
    timediff: number,
    type: string,
    dimensions: {
        width: number,
        height: number
    }
};


export default class BoardClock extends React.Component<ClockInterface, ClockState> {

    clocktimerid: any
    myInput: any

    constructor(props: ClockInterface) {
        super(props);
        console.log("BoardClock init " + this.props.unixcompetitiontime + " - " + this.props.type)
        this.setClock = this.setClock.bind(this)
        this.clocktimer = this.clocktimer.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.setClockSize = this.setClockSize.bind(this)
        this.restartMessage = this.restartMessage.bind(this)
        this.myInput = React.createRef()

        this.state = {
            unixcompetitiontime: 1,
            startcompetition: 0,
            hourHandWidth: 5,
            minuteHandWidth: 5,
            timediff: 0,
            datestart: Date.now(),
            type: "0",
            dimensions: {
                width: 100,
                height: 100
            }
        }

    }

    // die Uhr fängt keine Nuller ab
    format(ms: number) {
        var minutes = Math.floor(ms / (1000 * 60)),
            seconds = Math.floor((ms - minutes * 1000 * 60) / 1000),
            fract = Math.floor((ms - minutes * 1000 * 60 - seconds * 1000) / 100);

        return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ',' + fract;
    }

    setClock() {
        //1568556787
        this.setState({
            unixcompetitiontime: Math.floor(parseInt(this.props.unixcompetitiontime)),
            datestart: Date.now()
        })

        console.log("clock " + parseInt(this.props.unixcompetitiontime) + " " + this.props.unixcompetitiontime)

        if (this.props.type === 'message') {
            this.setState({
                hourHandWidth: 4,
                minuteHandWidth: 4
            })
        }
    }

    startTimer() {
        this.setState({
            datestart: Date.now()
        })
        console.log("start clock")
        this.clocktimerid = setInterval(this.clocktimer, 1000);
    }

    clocktimer() {
        this.setState({
            timediff: Date.now() - this.state.datestart
        })
        this.setClockSize()
    }

    componentWillUnmount() {
        clearInterval(this.clocktimerid);
    }

    setClockSize() {
        var calcwidth = window.screen.width > 800 ? 350 : (window.screen.width * 0.8 - 100)
        var calcwidth2 = (window.screen.height - 100) < calcwidth ? (window.screen.height - 100) : calcwidth
        var calcwidth3 = calcwidth2 > 350 ? 350 : calcwidth2
        this.setState({
            dimensions: {
                width: calcwidth3,
                height: window.screen.height,
            },
        });
    }

    componentDidMount() {
        this.setClockSize();
        this.setClock();
        this.startTimer()
        this.setState({
            type: this.props.type
        })
    }

    componentDidUpdate(prevProps: ClockInterface) {

        if (prevProps.unixcompetitiontime !== this.props.unixcompetitiontime) {
            console.log("type change")
            this.restartMessage()
            this.setState({
                type: this.props.type
            })
        }
        //this.restartMessage();
    }

    async restartMessage() {
        clearInterval(this.clocktimerid);

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 1000)
        });

        let result = await promise; // wait till the promise resolves (*)
        console.log(result)

        this.setClock();
        this.startTimer();
    }

    render() {

        let clocktime = (this.state.unixcompetitiontime * 1000) + this.state.timediff;
        let unixtoshow = isNaN(clocktime) ? 1 : clocktime
        let newclocktime = new Date(unixtoshow);

        let staticmessagetable = classnames('staticmessagetable');

        console.log("start clock " + unixtoshow + " diff " + this.state.timediff)

        return (
            <table className={staticmessagetable}>
                <tbody>
                    <tr >
                        <td align='center'>
                            <Clock
                                value={newclocktime}
                                size={this.state.dimensions.width}
                                hourHandWidth={this.state.hourHandWidth}
                                minuteHandWidth={this.state.minuteHandWidth}
                                renderNumbers={false}
                                className="message_clock"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
};

