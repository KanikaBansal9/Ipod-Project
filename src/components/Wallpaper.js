import React from 'react'
class Wallpaper extends React.Component {
    
    render() { 
        const{active}=this.props;
        return (
           <div className='themes'>
            <h2>Wallpapers</h2>
            <ul className='themesul'>
                {["Wallpaper1","Wallpaper2","Wallpaper3","Wallpaper4"].map((element,index)=>{
                    return active===index?<li key={index}className='activetheme themeli'>{element}</li>
                    :<li key={index} className='themeli'>{element}</li>
                })
                }
            </ul>

           </div>
        );
    }
}
 
export default Wallpaper;