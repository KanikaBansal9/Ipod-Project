import React from 'react'
import settingstyle from '../css/setting.module.css'
class Setting extends React.Component {
    
    render() { 
        const {settingsItem,active}=this.props;
        return (
             <div className={settingstyle.settings}>
            <h3 className={settingstyle.settingsheading}>Settings</h3>
            <ul className={settingstyle.ulsetting}>
                {settingsItem.map((element,index)=>{
                    return active===index?<li key={index}  className={`${settingstyle.active} ${settingstyle.lisetting}`} >&nbsp;{element}
                    </li>:<li key={index} className={settingstyle.lisetting} >&nbsp;{element}</li>
                })}
            </ul>
           </div>
        );
    }
}
 
export default Setting;