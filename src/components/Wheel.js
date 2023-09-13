
import React from "react";
import '../css/wheel.css';
import ZingTouch from 'zingtouch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay,faPause,faBackward,faForward} from '@fortawesome/free-solid-svg-icons'
class Wheel extends React.Component {
    //render wheel
    constructor() {
        super();
        this.angle=0;

    }
    render() {
        const{changemenuForward,active,currentmenu,theme,wheelcolor}=this.props;
        return (
            <div className="wheel-container">
                <div style={{backgroundColor:wheelcolor}} className="wheel" id="wheel">
                    <div className="controls" id="menu">
                        <div style={{color:theme}}>MENU</div>
                    </div>
                    <div className="controls" id="forward">
                    <FontAwesomeIcon style={{color:theme}} icon={faForward} />
                    </div>
                    <div className="controls" id="playpause">
                         <FontAwesomeIcon style={{color:theme}} icon={faPlay} />
                         <FontAwesomeIcon style={{color:theme}} icon={faPause} />
                        
                    </div>
                    <div className="controls" id="backward">
                    <FontAwesomeIcon style={{color:theme}} icon={faBackward} />
                    </div>
                </div>
                <div style={{backgroundColor:theme}} className="blank" id="blank"  onClick={() => { changemenuForward(active, currentmenu) }}>
                </div>
            </div>
        );
    }

//control the wheel rotation action if rotation is more than 15 degrees and also check the direciton of rotation
wheelcontroll=(e)=>{
    const{updateActiveMenu,currentmenu}=this.props;
    if(e.detail.distanceFromOrigin===0){
        this.angle=e.detail.angle;
    }
    
    if(Math.abs(this.angle-e.detail.angle)>300){
        this.angle=Math.abs(e.detail.angle);
        if(e.detail.distanceFromLast===0){
            return;
        }
        else if(e.detail.distanceFromLast<0){
            updateActiveMenu(1,currentmenu);
        }
        else{
            updateActiveMenu(0,currentmenu);
        }
    
    }
    else if(Math.abs(this.angle-e.detail.angle)>15){
        this.angle=Math.abs(e.detail.angle);
        if(e.detail.distanceFromLast===0){
            return;
        }
        else if(e.detail.distanceFromLast>0){
            updateActiveMenu(1,currentmenu);
        }
        else{
            updateActiveMenu(0,currentmenu);
        }
    }
}

componentDidMount(){
    const{ toggleplaypause,changeMenuBackward, seeksongForward,seeksongReverse }=this.props;
    const wheelcontroll=this.wheelcontroll;
    const wheel=document.getElementById("wheel");
    const activeregion=ZingTouch.Region(wheel);
    const menuicon=document.getElementById("menu");
    const playpause=document.getElementById("playpause");
    const backward=document.getElementById("backward");
    const forward=document.getElementById("forward");
    
    const longTapGesture=new ZingTouch.Tap({
        maxDelay:10000,
        numInputs:1,
        tolerance:1,
    })

    activeregion.bind(menuicon,'tap',function(e){
        changeMenuBackward();
    });
    activeregion.bind(wheel,'rotate',function(e){
        wheelcontroll(e);
    });
    activeregion.bind(playpause,'tap',function(e){
        toggleplaypause();
    });
    activeregion.bind(backward,longTapGesture,function(e){
        seeksongReverse(e);
    });
    activeregion.bind(forward,longTapGesture,function(e){
        seeksongForward(e);
    });
  

}

}

export default Wheel;