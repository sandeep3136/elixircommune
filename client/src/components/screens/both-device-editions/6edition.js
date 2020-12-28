import React,{useContext} from 'react'
import {UserContext} from '../../../App'
import SecurePopUp from '../SecurePopUp'
import Edition6 from '../mobile-editions/Edition6'

const Editione6 = () =>{
    const {state,dispatch} = useContext(UserContext);
    if(state)
    {
        return(
            <>
                <div className="mbfb">
                    <Edition6/>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <SecurePopUp/>
                <div className="mbfb">
                    <Edition6/>
                </div>
            </>
        )
    }
    
}

export default Editione6;