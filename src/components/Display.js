import React from 'react'
import '../css/display.css'
import Navbar from './Navbar';
import Lockdisplay from './Lockdisplay'
import Menu from './Menu';
import Music from './Music';
import Setting from './Setting';
import Songs from './Songs';
import Playing from './Playing';
import Themes from './Themes';
import ColorWheel from './ColorWheel';
import Wallpaper from './Wallpaper';
//on the basis of what current menu is this item will render only that component
//keys
//-2:lockscreen
//-1: Main menu
// 1: Music Menu
// 2: Games
// 3: Settings
// 4: All songs
// 5: Artist
// 6: Albums
// 7: favs

class Display extends React.Component {

    render() {
        const {songindex,audio ,songItemUrl, songItems,settingsItem, musicItems, wallpaper, wallpaperitems, currentmenu, noty, notifyText,  playing, active,songImgUrl, menuItems,setnoty } = this.props;
        return (
            <>
                <div style={{ backgroundImage: `url(${wallpaperitems[wallpaper]})` }} className='display'>
                    <Navbar noty={noty} notifyText={notifyText} playing={playing} setnoty={setnoty} />

                    {currentmenu === -2 && <Lockdisplay />}
                    {currentmenu === -1 && <Menu active={active} songImgUrl={songImgUrl} menuItems={menuItems} />}
                    {currentmenu === 1 && <Music musicItems={musicItems} active={active} />}
                    {currentmenu === 2 && <div className='emptydiv'>
                        <h1 className='emptyheading'>Games
                        </h1>
                    </div>}
                    {currentmenu === 3 && < Setting active={active} settingsItem={settingsItem} />}
                     {currentmenu===4&&<Songs active={active} songItems={songItems}/>} 
                    {currentmenu === 5 && <div className='emptydiv'>
                        <h1 className='emptyheading'>Artists
                        </h1>
                    </div>}
                    {currentmenu === 6 && <div className='emptydiv'>
                        <h1 className='emptyheading'>Albums
                        </h1>
                    </div>}
                    {currentmenu === 7 && <div className='emptydiv'>
                        <h1 className='emptyheading'>My Favorites
                        </h1>
                    </div>}
                    {(currentmenu===0||currentmenu===8)&&<Playing songindex={songindex} audio={audio} songItemUrl={songItemUrl} songImgUrl={songImgUrl} playing={playing}  songItems={songItems}/>}

                    {currentmenu===9&&<Themes active={active}/>}
                    {currentmenu===10&&<ColorWheel active={active}/>}
                    {currentmenu===11&&<Wallpaper active={active}/>}

                </div>
            </>
        );
    }
}

export default Display;