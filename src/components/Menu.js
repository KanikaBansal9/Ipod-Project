import React from 'react'
import music from '../assets/music.jpg'
import game from '../assets/game.jpg'
import settings from '../assets/settings.jpg'
import menustyle from '../css/menu.module.css'
class Menu extends React.Component {
 
    render() { 
        const{active,songImgUrl,menuItems}=this.props;
        return (
            <div className={menustyle.menucontainer}>
                <div className={menustyle.menu}>
                    <ul className={menustyle.ulmenu}>
                        {menuItems.map((element,index)=>{
                            return active===index?<li key={index} className={`${menustyle.active} ${menustyle.limenu}`} >&nbsp;{element}</li>:
                            <li className={menustyle.limenu} key={index}>&nbsp;{element}</li>
                        })}
                    </ul>
                </div>
                <div className={menustyle.leaf}>
                    {active===0&&<img className={menustyle.leafimg} src={songImgUrl} alt=''></img>}
                    {active===1&&<img className={menustyle.leafimg} src={music} alt=''></img>}
                    {active===2&&<img className={menustyle.leafimg} src={game} alt=''></img>}
                    {active===3&&<img className={menustyle.leafimg} src={settings} alt=''></img>}
                </div>
            </div>
        );
    }
}
 
export default Menu;