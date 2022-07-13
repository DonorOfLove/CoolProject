import {CLEAR_STATE, SET_MATCH, SET_PLAYERS} from "../types/types";

export const setPlayers= (payload)=>({type:SET_PLAYERS,payload})
export const Clear= ()=>({type:CLEAR_STATE})
export const setMatch= (payload)=>({type:SET_MATCH,payload})

export const toggle=(type)=>({type:type})
