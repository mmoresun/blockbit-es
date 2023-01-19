import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <>            
            <nav>
                <ul>
                    <li><Link to="/">Home</Link>  (logo will be here)</li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
