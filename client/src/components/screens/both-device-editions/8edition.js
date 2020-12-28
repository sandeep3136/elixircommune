import React,{useContext} from 'react'
import {UserContext} from '../../../App'
import SecurePopUp from '../SecurePopUp'
import Edition8 from '../mobile-editions/Edition8'

const Editione8 = () =>{
    const {state,dispatch} = useContext(UserContext);
    if(state)
    {
        return(
            <>
                <div className="mbfb">
                    <Edition8/>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <SecurePopUp/>
                <div className="mbfb">
                    <Edition8/>
                </div>
            </>
        )
    }
    
}

export default Editione8;