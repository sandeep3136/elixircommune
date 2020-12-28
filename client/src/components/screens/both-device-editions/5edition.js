import React,{useContext} from 'react'
import {UserContext} from '../../../App'
import SecurePopUp from '../SecurePopUp'
import Edition5 from '../mobile-editions/Edition5'

const Editione5 = () =>{
    const {state,dispatch} = useContext(UserContext);
    if(state)
    {
        return(
            <>
                <div className="mbfb">
                    <Edition5/>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <SecurePopUp/>
                <div className="mbfb">
                    <Edition5/>
                </div>
            </>
        )
    }
    
}

export default Editione5;