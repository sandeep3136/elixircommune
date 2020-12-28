import React,{useContext} from 'react'
import {UserContext} from '../../../App'
import SecurePopUp from '../SecurePopUp'
import Editionb6 from '../desktop-editions/Edition-6'
const Editionfb6 = () =>{
    const {state,dispatch} = useContext(UserContext);
    if(state)
    {
        return(
            <>
                <div className="dkfb">
                    <Editionb6/>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <SecurePopUp/>
                <div className="dkfb">
                    <Editionb6/>
                </div>
            </>
        )
    }
    
}

export default Editionfb6;