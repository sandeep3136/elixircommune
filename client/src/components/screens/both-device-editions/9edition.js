import React,{useContext,useEffect} from 'react'
import {UserContext} from '../../../App'
import SecurePopUp from '../SecurePopUp'
import Edition9 from '../mobile-editions/Edition9'

const Editione9 = () =>{
    const {state,dispatch} = useContext(UserContext);
    if(state)
    {
        return(
            <>
                <div className="mbfb">
                    <Edition9/>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <SecurePopUp/>
                <div className="mbfb">
                    <Edition9/>
                </div>
            </>
        )
    }
    
}

export default Editione9;