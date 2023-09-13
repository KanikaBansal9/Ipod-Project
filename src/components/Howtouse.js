import React from "react";
import '../css/howtouse.css'

// dropdown info on controls

class Howtouse extends React.Component {
    constructor() {
        super();
        this.state = {
            dropdown: false
        }
    }
    handleDropdown = () => {
        this.setState({
            dropdown: !this.state.dropdown
        });
    }
    render() {
        const { dropdown } = this.state;
        let cssprop;
        if (dropdown === false) {
            cssprop = { top: "-545px" };
        } else {
            cssprop = { top: "0px" };
        }
        return (
            <div style={cssprop}
                className="dropdowndiv"
            >
                <div className="infodiv">
                    <h3>Controls</h3>
                    <ul>
                        <li>Unlock: Press center button.
                            Lock: Press menu button in main menu.</li>
                        <li>
                            Play/pause music: Press bottom play/pause button.
                        </li>
                        <li>Short press forward: Next track (while playing).
                            Short press reverse: Previous track (while playing).</li>
                        <li>
                            Long press forward: Seek forward (while playing).
                            Long press reverse: Seek reverse (while playing).
                        </li>
                        <li>
                            Navigate menu items: Rotate track wheel.
                        </li>
                        <li>
                            Next menu/Enter menu: Press center button.
                            Previous menu: Press menu button.
                        </li>
                        <li>
                            Songs play. Check settings menu.
                        </li>
                    </ul>
                </div>
                <button id="info-btn" onClick={this.handleDropdown}>
                    How to use GUIDE !
                </button>
            </div>

        );
    }
}
export default Howtouse;