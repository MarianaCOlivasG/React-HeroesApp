
import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    /* Extraer mi context */
    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        // history.push('/');
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Mariana'
            }
        });
        history.replace( lastPath );
    }

    return (
        <div className="container mt-5">
            <h1>Login Sreen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={ handleLogin }>LOGIN</button>
        </div>
    )
}
