import React from "react";
import {useState, useEffect} from 'react';
import {withRouter, Link} from "react-router-dom";
import Hamburger from './Hamburger';

const Header=({history})=>{
// State for menu btn
  const [state, setState]= useState({
    initial: false, 
    clicked: null,
    menuName: "Menu"
  })
//State for disabled btn
  const [disabled, setDisabled]= useState(false);

  //use effect for page changes
  useEffect(()=> {
    history.listen(()=> {
      setState({clicked: false, menuName: "Menu"})
    })
  })
  const handleMenu=()=> {
    disableMenu();
    if(state.initial === false){
      setState({
        inital: null,
        clicked: true,
        menuName: "Close"
      });
      console.log(1)
    } else if (state.clicked === true){
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
      console.log(2)
    }
    else if (state.clicked === false){
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
      console.log(3)
    }
  };

  //Determine if our menu btn should be disabled 
  const disableMenu=()=> {
    setDisabled(!disabled);
    setTimeout(()=> {
      setDisabled(false)
    }, 1200);
  };

  return <header>
    <div className="container">
      <div className="wrapper">
        <div className="inner-header">
          <div className="logo">
            <Link to='/'>CONST ENGINEERING.</Link>
          </div>
          <div className="menu">
            <button disabled= {disabled} onClick={handleMenu}>Menu</button>
          </div>
        </div>
      </div>
    </div>
    <Hamburger state={state}/>
     </header>
};

export default withRouter(Header);