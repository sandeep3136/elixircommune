import React,{useContext} from 'react'
import {UserContext} from '../../../App'
import SecurePopUp from '../SecurePopUp'
import Editionb9 from '../desktop-editions/Edition-9'

const Editionfb9 = () =>{
    const {state,dispatch} = useContext(UserContext);
    if(state)
    {
        return(
            <>
                <div className="dkfb">
                    <Editionb9/>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <SecurePopUp/>
                <div className="dkfb">
                    <Editionb9/>
                </div>
            </>
        )
    }
    
}

export default Editionfb9;