import React from 'react'
import songstyle from '../css/songs.module.css'
class Songs extends React.Component {
    
    render() { 
        const{songItems,active}=this.props;
        return (
            <div className={songstyle.songs}>
            <h3 className={songstyle.songheading}>Music</h3>
            <ul className={songstyle.ulsong}>
                {songItems.map((element,index)=>{
                    return active===index?<li key={index}  className={`${songstyle.active} ${songstyle.lisong}`} >&nbsp;{element}
                    </li>:<li key={index} className={songstyle.lisong} >&nbsp;{element}</li>
                })}
            </ul>
           </div>
        );
    }
}
 
export default Songs;