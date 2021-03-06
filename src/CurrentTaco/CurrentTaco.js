import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import './currentTaco.css'
import PropTypes from 'prop-types';
import taco3 from '../Assets/taco3.svg';
import taco2 from '../Assets/taco2.svg';

// DRY up the conditional logic with an array and a loop
// set a variable for the keys that change within 'taco' object

function CurrentTaco(props) {
  if(props.taco.base_layer) {
    return (
      <section className="Current-taco-container">
        <h1>{props.taco.name}</h1>
        <img src={taco2} className="taco-icon" alt="taco"/>
        <p>{props.taco.base_layer.name}</p>
        {props.taco.mixin &&
          <p>with {props.taco.mixin.name}</p>
        }
        {props.taco.condiment &&
          <p>and {props.taco.condiment.name}</p>
        }
        {props.taco.shell &&
          <p>on {props.taco.shell.name}</p>
        }
        <section className="button-container">
          <button className="taco-button" onClick={ event => props.getTaco(event)}>Get Me A Different Taco!</button>
          <Link to="/recipe"><button className="recipe-botton">Sounds tasty! Show Me The Recipe</button></Link>
        </section>
      </section>
    )
  } else {
    return (
      <section className="Current-taco-container">
        <img src={taco3} className="taco-icon" alt="taco" />
        <button className="taco-button" onClick={ event => props.getTaco(event)}>Get Me A Taco!</button>
      </section>
    )
  }
    }

    CurrentTaco.proptypes = {
      taco: PropTypes.object
    }

export default CurrentTaco;
