import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import React, {useContext} from 'react';
import { AppContext } from "../App/AppContext";

export default function Footer () {
    const { user } = useContext(AppContext);
    return (
        <>
         <footer className="App-footer">
            {user.isLoggedIn && (
                <p>
                    <a href='#'>Contact us</a>
                </p>
            )}
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>

        </>
       
    );
}