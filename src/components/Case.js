import React from 'react';
import Wheel from './Wheel';
import Display from './Display';
import '../css/case.css';

//renders the body of ipod

class Case extends React.Component {
    
    render() {
        const{songindex,audio ,songItemUrl,songItems,settingsItem,musicItems,wallpaper,wallpaperitems,theme,noty,notifyText,wheelcolor,playing,setnoty,currentmenu,active,songImgItemUrl,songImgUrl,menuItems,updateActiveMenu, toggleplaypause,changeMenuBackward,changemenuForward, seeksongForward,seeksongReverse}=this.props; 
        return (
            <div>
                <div style={{backgroundColor:theme}} className='case'>
                <Display songindex={songindex} audio={audio} songItemUrl={songItemUrl}  songItems={songItems} settingsItem={settingsItem}  musicItems={musicItems} active={active} songImgItemUrl={songImgItemUrl} songImgUrl={songImgUrl} menuItems={menuItems}  wallpaper={wallpaper} wallpaperitems={wallpaperitems} currentmenu={currentmenu} noty={noty} notifyText={notifyText} playing={playing} setnoty={setnoty} />

                <Wheel theme={theme} active={active} menuItems={menuItems} currentmenu={currentmenu} wheelcolor={wheelcolor} updateActiveMenu={updateActiveMenu} toggleplaypause={toggleplaypause} changeMenuBackward={changeMenuBackward} changemenuForward={changemenuForward} seeksongForward={seeksongForward} seeksongReverse={seeksongReverse} />
                </div>
            </div>
        );
    }
}
 
export default Case;