import React,{useContext} from 'react'
import {UserContext} from '../../../App'
import SecurePopUp from '../SecurePopUp'
import Editionb7 from '../desktop-editions/Edition-7'

const Editionfb7 = () =>{
    const {state,dispatch} = useContext(UserContext);
    if(state)
    {
        return(
            <>
                <div className="dkfb">
                    <Editionb7/>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <SecurePopUp/>
                <div className="dkfb">
                    <Editionb7/>
                </div>
            </>
        )
    }
    
}

export default Editionfb7;