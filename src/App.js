import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import Matches from "./Views/Matches";
import Nav from "./Components/Nav"
import Player from "./Views/Player";
import Search from "./Views/Search";
import Heroes from "./Views/Heroes";
import Teams from "./Views/Teams";

function App() {
 //  const removeInf = () => {
 //    dispatch({type:'REMOVE'})
 //  }
 //  const changeInf = () => {
 //    dispatch({type:'CHANGE',payload:'changed'})
 //  }
 // const dispatch= useDispatch()
 //  const inf=useSelector(state => state.inf.inf)
 //  console.log(inf)
  return (
    <div className="App">
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/search" element={<Search />} />
            <Route path="/player" element={<Player/>} />
            <Route path="/teams" element={<Teams/>} />
            <Route path="/heroes" element={<Heroes/>} />
        </Routes>
      {/*<p>{inf}</p>*/}
      {/*<button onClick={()=>removeInf()}></button>*/}
      {/*<button onClick={()=>changeInf()}></button>*/}
    </div>
  );
}

export default App;
