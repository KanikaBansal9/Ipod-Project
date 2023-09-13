import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../css/lockscreen.css"
import { faLock } from '@fortawesome/free-solid-svg-icons'
class Lockdisplay extends React.Component {
    
    render() { 
        return (
            <div>
                <div className='lockdisplay'>
                <FontAwesomeIcon icon={faLock} />
                </div>
                {/* <div className='bottomlock'>
                    <h3>Press Center Button to Unlock !</h3>
                </div> */}
            </div>
        );
    }
}
 
export default Lockdisplay;
