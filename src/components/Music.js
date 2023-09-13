import React from 'react'
import musicstyle from "../css/music.module.css"
class Music extends React.Component {
    
    render() { 
        const{musicItems,active}=this.props;
        return (
               <div className={musicstyle.music}>
                <h3 className={musicstyle.musicheading}>Music</h3>
                <ul className={musicstyle.ulmusic}>
                    {musicItems.map((element,index)=>{
                        return active===index?<li key={index}  className={`${musicstyle.active} ${musicstyle.limusic}`} >&nbsp;{element}
                        </li>:<li key={index} className={musicstyle.limusic} >&nbsp;{element}</li>
                    })}
                </ul>
               </div>
        );
    }
}
 
export default Music;