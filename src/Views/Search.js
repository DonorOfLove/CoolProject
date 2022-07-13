import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggle} from "../redux/actions/actions";

const Search = () => {
    const searchData = useSelector(state => state.search)
    const isLoaded = useSelector(state => state.loaded)
    const dispatch = useDispatch()

    useEffect(() => {return ()=> {dispatch(toggle('TOGGLE_PLAYERS'))}}, [])

    return (
        <div>
            {isLoaded.players && (
                <div>players:{
                    searchData.players.map((player) => {
                        return (
                            <div>{player.personaname}</div>
                        )
                    })
                }</div>
            )}
            {Object.entries(searchData.match).length > 0 ? (

                <div> Match:
                    {searchData.match.match_id}</div>
            ) : (
                null
            )}
        </div>
    );
};

export default Search;
