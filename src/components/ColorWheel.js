import React from 'react'
class ColorWheel extends React.Component {
    
    render() { 
        const{active}=this.props;
        return (
           <div className='themes'>
            <h2>Wheelcolor</h2>
            <ul className='themesul'>
                {["Black","White","Brown"].map((element,index)=>{
                    return active===index?<li className='activetheme themeli'>{element}</li>
                    :<li className='themeli'>{element}</li>
                })
                }
            </ul>

           </div>
        );
    }
}
 
export default ColorWheel;