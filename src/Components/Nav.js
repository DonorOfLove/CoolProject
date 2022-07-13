import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Clear, setMatch, setPlayers, toggle} from "../redux/actions/actions";

const Nav = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();

    function search(e) {
        if (e.charCode == 13) {
         navigate('search')
         dispatch(Clear)
            fetch(`https://api.opendota.com/api/search?q=${e.target.value}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(setPlayers(data))
                })
                fetch(`https://api.opendota.com/api/matches/${e.target.value}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        dispatch(setMatch(data))})
        }
    }
    return (
        <nav className={'nav'}>
            <Link className={'nav_link'} to="/">Home</Link>
            <Link className={'nav_link'} to="matches">Matches</Link>
            <Link className={'nav_link'} to="teams">Teams</Link>
            <Link className={'nav_link'} to="heroes">Heroes</Link>
            <div className={'nav_inp_wrapp'}>
                <input className={'nav_inp'} onKeyPress={search}/>
                <Link to='/YourProfile'>Profile</Link>
            </div>
        </nav>
    );
};

export default Nav;
