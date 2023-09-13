import React from 'react'
import '../css/navbar.css'
import Battery from "../assets/battery.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faWifi, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            time: this.getCurrentTime()
        }
        this.stateId = "";
    }
    //no notification -- ipod logo , time,battery
    // notif -- then show for one sec and clear it
    componentDidMount() {
        const { noty } = this.props;
        if (noty === true) {
            return;
        }
        //to change time after 60 sec
        this.stateId = setInterval(() => {
            this.setState({
                time: this.getCurrentTime()
            });
        }, 60000);
    }
    componentDidUpdate() {
        const { setnoty, noty } = this.props;
        if (noty === true) {
            setTimeout(function () {
                setnoty();
            }, 1000)
        }
    }
    //clear the update time interval
    componentWillUnmount() {
        const { noty } = this.props;
        if (noty !== true) clearInterval(this.stateId);
    }
    //current time storing in the string
    getCurrentTime() {
        const today = new Date();
        var time = today.getHours() + ':' + today.getMinutes();
        if (today.getMinutes() < 10) {
            time = today.getHours() + ':0' + today.getMinutes();
        }
        return time;
    }
    render() {
        const { time } = this.state;
        const { playing, noty, notifyText } = this.props;
        return (
            <div className='bar'>
                {<h5 className='heading'>iPod
                   

                    <FontAwesomeIcon className='wifi' icon={faWifi} />
                </h5>}
                {noty === true && <h5 className='notification'>{notifyText}</h5>}
                {noty === false && <h3 className='time'>{time}</h3>}
                {
                    <div className='right-container-nav'>
                        {playing ? <h5 className='pauseplaynav'> {<FontAwesomeIcon icon={faPlay} />} </h5> : <h5 className='pauseplaynav'>{<FontAwesomeIcon icon={faPause} />} </h5>}
                        <img alt="" className='battery' src={Battery} ></img>
                    </div>

                }

            </div>
        );
    }
}

export default Navbar;

