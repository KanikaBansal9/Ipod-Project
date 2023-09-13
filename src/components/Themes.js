import React from 'react'
import '../css/theme.css'
class Themes extends React.Component {
   
    render() { 
        const{active}=this.props;
        return (
           <div className='themes'>
            <h2>Themes Select</h2>
            <ul className='themesul'>
                {["Space Purple","Silver","USC gold","White","Dark Black"].map((element,index)=>{
                    return active===index?<li key={index}className='activetheme themeli'>{element}</li>
                    :<li key={index}className='themeli'>{element}</li>
                })
                }
            </ul>

           </div>
        );
    }
}
 
export default Themes;