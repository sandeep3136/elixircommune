import React,{useContext} from 'react'
import {UserContext} from '../../../App'
import SecurePopUp from '../SecurePopUp'
import Editionb8 from '../desktop-editions/Edition-8'

const Editionfb8 = () =>{
    const {state,dispatch} = useContext(UserContext);
    if(state)
    {
        return(
            <>
                <div className="dkfb">
                    <Editionb8/>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <SecurePopUp/>
                <div className="dkfb">
                    <Editionb8/>
                </div>
            </>
        )
    }
    
}

export default Editionfb8;