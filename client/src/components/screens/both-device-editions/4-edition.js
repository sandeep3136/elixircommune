import React,{useContext} from 'react'
import {UserContext} from '../../../App'
import SecurePopUp from '../SecurePopUp'
import Editionb4 from '../desktop-editions/Edition-4'
const Editionfb4 = () =>{
    const {state,dispatch} = useContext(UserContext);
    if(state)
    {
        return(
            <>
                <div className="dkfb">
                    <Editionb4/>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <SecurePopUp/>
                <div className="dkfb">
                    <Editionb4/>
                </div>
            </>
        )
    }
    
}

export default Editionfb4;