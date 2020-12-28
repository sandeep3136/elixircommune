import React,{useContext} from 'react'
import {UserContext} from '../../../App'
import SecurePopUp from '../SecurePopUp'
import Edition7 from '../mobile-editions/Edition7'

const Editione7 = () =>{
    const {state,dispatch} = useContext(UserContext);
    if(state)
    {
        return(
            <>
                <div className="mbfb">
                    <Edition7/>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <SecurePopUp/>
                <div className="mbfb">
                    <Edition7/>
                </div>
            </>
        )
    }
    
}

export default Editione7;