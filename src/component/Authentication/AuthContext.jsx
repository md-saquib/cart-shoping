import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { DataContext } from '../data provider/DataProvider';

const AuthContext = ({ children }) => {

    //Path of Component come from
    const location = useLocation();
    const { pathname } = location;

    
    //Find login data
    const logedin = useContext(DataContext);
    const { login } = logedin;



    return (
        <>
            {login ? children : <Navigate to='/login' state={{ path: pathname }} />}
        </>
    )
}

export default AuthContext