import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="matches">Matches</Link>
            <Link to="/Teams">Teams</Link>
            <Link to="/Search">Search</Link>
            <Link to="/Player">Player</Link>
        </nav>
    );
};

export default Nav;
