import React from "react";
//cssfiles
import '../css/app.css';
//appbody
import Howtouse from "./Howtouse";
import Case from "./Case";
//wallpapers import

import wallpaper1 from '../assets/wallpaper1.jpg'
import wallpaper2 from '../assets/wallpaper2.jpg'
import wallpaper3 from '../assets/wallpaper3.png'
import wallpaper4 from '../assets/wallpaper4.jpg'

//importing songs
import song6 from '../assets/songs/Taylor-Swift-feat-Karma-Karma-(Gospeljingle.com) (1).mp3'
import song2 from '../assets/songs/PinkPantheress_Feat_Ice_Spice_-_Boys_a_liar_pt_2.mp3'
import song3 from '../assets/songs/Starboy(PagalWorld.Social).mp3'
import song4 from '../assets/songs/Khalid - Young Dumb Broke.mp3'
import song5 from '../assets/songs/Calm-Down-Calm-Down(PagalWorld.Social).mp3'
import song1 from '../assets/songs/All We Know.mp3'

//importing all song cover imgs
import song6Img from '../assets/karma.jpg'
import song2Img from '../assets/boysliar.jpg'
import song3Img from '../assets/starboy.jpg'
import song4Img from '../assets/khalid.jpg'
import song5Img from '../assets/calmdown.jpg'
import song1Img from '../assets/allweknow.jpg'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      songindex: 0,
      audio: new Audio(song1),
      songItemUrl: [song1, song2, song3, song4, song5, song6],
      songItems: ["All We Know - Chainsmokers", "Boy's a liar - PinkPantheress", "Starboy - Weeknd", "Young Dumb Broke - Khalid", "Calmdown - Selena Gomez", "Karma - Taylor Swift"],
      active: 0, //active list item
      menuItems: ["Now Playing", "Music", "Games", "Settings"],
      settingsItem: ["Themes", "WheelColor", "Wallpaper"],
      musicItems: ["All Songs", "All Artists", "Albums", "Favorites"],
      songImgItemUrl: [song1Img, song2Img, song3Img, song4Img, song5Img, song6Img], //songs imgs list
      songImgUrl: song1Img,
      songUrl: song1,
      currentmenu: -2,
      lengthMenuKey: {
        "-1": 3,
        1: 3,
        3: 2,
        4: 5,
        9: 4,
        10: 2,
        11: 2
      },
      menumapping: { "-1": [0, 1, 2, 3], 1: [4, 5, 6, 7], 3: [9, 10, 11] },
      wallpaper: 1,
      navigationStack: [],
      wallpaperitems: [wallpaper1, wallpaper2, wallpaper3, wallpaper4],
      playing: true,
      wheelcolor: "white",
      theme: "rgb(210, 210, 210)", //current theme
      noty: false, //notification popup
      notifyText: "Wallpaper Changed" //text of notification
    }
  }

  
  seeksongForward = (e) => {
    if (this.state.currentmenu === -2) {
      return;
    }
    if (this.state.playing === false) {
      return;
    }
    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let songindex = this.state.songindex;
      if (songindex === this.state.songItemUrl.length - 1) {
        songindex = 0
      }
      else {
        songindex++;
      }
      const songUrl = this.state.songItemUrl[songindex];
      const songImgUrl = this.state.songImgItemUrl[songindex];
      this.setState({
        songindex,
        songImgUrl,
        songUrl,
        audio: new Audio(songUrl)
      }, () => {
        this.state.audio.play();
      });
    } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
      const interval = e.detail.interval / 100;
      this.setState((prevState) => {
        prevState.audio.currenttime += interval;
        return prevState;
      })
    }
  }

  seeksongReverse = (e) => {
    if (this.state.currentmenu === -2) {
      return;
    }
    if (this.state.playing === false) {
      return;
    }
    if (e.detail.interval < 250) {
      this.state.audio.pause();
      let songindex = this.state.songindex;
      if (songindex === 0) {
        songindex = this.state.songItemUrl.length - 1;
      }
      else {
        songindex--;
      }
      const songUrl = this.state.songItemUrl[songindex];
      const songImgUrl = this.state.songImgItemUrl[songindex];
      this.setState({
        songindex,
        songImgUrl,
        songUrl,
        audio: new Audio(songUrl)
      }, () => {
        this.state.audio.play();
      });
    } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
      const interval = e.detail.interval / 100;
      this.setState((prevState) => {
        prevState.audio.currenttime += interval;
        return prevState;
      })
    }
  }

  toggleplaypause = () => {
    if (this.state.currentmenu === -2) {
      return;
    }
    if (this.state.playing === true) {
      this.setState({ playing: false });
      this.state.audio.pause();
    }
    else {
      this.setState({ playing: true });
      this.state.audio.play();
    }
  }
  //update active menu while using the wheel
  updateActiveMenu = (direction, menu) => {
    if (menu !== -1 && menu !== 1 && menu !== 3 && menu !== 4 && menu !== 9 && menu !== 10 && menu !== 11) {
      return;
    }
    let min = 0;
    let max = 0;
    max = this.state.lengthMenuKey[menu];
    if (direction === 1) {
      if (this.state.active >= max) {
        this.setState({ active: min })
      }
      else {
        this.setState({ active: this.state.active + 1 })
      }
    } else {
      if (this.state.active <= min) {
        this.setState({ active: max })
      }
      else {
        this.setState({ active: this.state.active - 1 })
      }
    }
  }

  changeplayingsongfromMusicMenu = (id, navigationStack) => {
    const songUrl = this.state.songItemUrl[id];
    const songImgUrl = this.state.songImgItemUrl[id];
    this.state.audio.pause();
    this.setState({
      currentmenu: 8, songUrl: songUrl, navigationStack: navigationStack, active: 0, playing: true, songindex: id, audio: new Audio(songUrl), songImgUrl: songImgUrl
    }, () => {
      this.state.audio.play();
    }
    );
    return;
  }


  settheme = (id) => {
    let theme = "";
    if (id === 0) {
      theme = "#5e5566" //purple
    }
    else if (id === 1) {
      theme = "#e2e4e1"   //silver
    }
    else if (id === 2) {
      theme = "#d4c9b1" //gold
    }
    else if (id === 3) {
      theme = "#f0f0f0" //white
    }
    else if (id === 4) {
      theme = "rgb(49, 48, 48)" //black
    }
    this.setState({ theme: theme, noty: true, notifyText: "Theme Changed" })
    return;
  }

  setWheelcolor = (id) => {
    let wheelcolor = "";
    if (id === 0) {
      wheelcolor = "#212121"
    }
    else if (id === 1) {
      wheelcolor = "white";
    } else if (id === 2) {
      wheelcolor = "#3E2723";
    } else if (id === 3) {
      wheelcolor = "#3D5AFE";
    }
    this.setState({
      wheelcolor: wheelcolor, noty: true, notifyText: "Wheel Color Changed"
    })
    return;
  }

  setWallpaper = (id) => {
    this.setState({
      wallpaper: id, noty: true, notifyText: "Wallpaper Changed"
    });
    return;
  }
  //set notification as false after sending notif
  setnoty = () => {
    this.setState({ noty: false });
    return;
  }
  //change menu backward
  changeMenuBackward = () => {
    const navigationStack = this.state.navigationStack.slice();
    if (this.state.currentmenu === -2) {
      return;
    }
    else {
      const previd = navigationStack.pop();
      this.setState({
        currentmenu: previd, navigationStack: navigationStack
        , active: 0
      });
      return;
    }
  }
  //change menu forward on press of center button using navigation stack
  changemenuForward = (id, fromMenu) => {
    const navigationStack = this.state.navigationStack.slice();
    if (fromMenu !== -2 && fromMenu !== -1 && fromMenu !== 0 && fromMenu !== 1 && fromMenu !== 3 && fromMenu !== 4 && fromMenu !== 8 && fromMenu !== 9 && fromMenu !== 10 && fromMenu !== 11) {
      return;
    }
    if (fromMenu === -2) {
      navigationStack.push(this.state.currentmenu);
      this.setState({ currentmenu: -1, navigationStack: navigationStack, active: 0 });
      return;
    }
    if (fromMenu === -1) {
      navigationStack.push(this.state.currentmenu);
      this.setState({ currentmenu: id, navigationStack: navigationStack, active: 0 });
      return;
    }
    if (fromMenu === 0 || fromMenu === 8) {
      this.toggleplaypause();
      return;
    }
    if (fromMenu === 9) {
      this.settheme(id);
      return;
    }
    if (fromMenu === 10) {
      this.setWheelcolor(id);
      return;
    }
    if (fromMenu === 11) {
      this.setWallpaper(id);
      return;
    }
    navigationStack.push(this.state.currentmenu);
    if (fromMenu === 4) {
      this.changeplayingsongfromMusicMenu(id, navigationStack, fromMenu);
      return;
    }
    const currentMenuId = this.state.menumapping[fromMenu][id];
    this.setState({ currentmenu: currentMenuId, navigationStack: navigationStack, active: 0 });


  }

  render() {
    const { songindex, audio, songItemUrl, songItems, settingsItem, musicItems, active, songImgItemUrl, songImgUrl, menuItems, wallpaper, wallpaperitems, currentmenu, theme, notifyText, noty, wheelcolor, playing} = this.state;
    return (

      <div className="App">
        <Howtouse />
        <Case songindex={songindex} audio={audio} songItemUrl={songItemUrl} settingsItem={settingsItem}
          songItems={songItems} musicItems={musicItems} active={active} songImgItemUrl={songImgItemUrl} songImgUrl={songImgUrl} menuItems={menuItems} wallpaper={wallpaper} wallpaperitems={wallpaperitems} currentmenu={currentmenu} theme={theme} noty={noty} notifyText={notifyText} playing={playing} wheelcolor={wheelcolor}
          setnoty={this.setnoty} updateActiveMenu={this.updateActiveMenu} toggleplaypause={this.toggleplaypause} changeMenuBackward={this.changeMenuBackward} changemenuForward={this.changemenuForward} seeksongForward={this.seeksongForward} seeksongReverse={this.seeksongReverse} />
      </div>

    );

  }
}

export default App;
