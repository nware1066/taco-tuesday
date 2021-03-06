import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import './tacoRecipe.css';
import PropTypes from 'prop-types';
import taco4 from '../Assets/taco4.svg'
import favorite from '../Assets/favorite.svg'
import notFavorite from '../Assets/not-favorite.svg'

function TacoRecipe(props) {
  if (props.taco.base_layer) {
    return (
      <div className="recipe-container">
      <h1>{props.taco.base_layer.name} Taco</h1>
      <img src={taco4} className="taco-icon" alt="taco"/>
      <p>{props.taco.base_layer.recipe}</p>
      {props.taco.mixin &&
        <p>{props.taco.mixin.recipe}</p>
      }
      {props.taco.condiment &&
        <p>{props.taco.condiment.recipe}</p>
      }
      {props.taco.shell &&
        <p>{props.taco.shell.recipe}</p>
      }
      <Link to="/"><button className="return-home">Take me back!</button></Link>
      </div>
    )
  } else {
    return (
      <div>
        <h1>"You didn't pick a taco, yet!"</h1>
        <Link to="/"><button className="return-home">Take me back!</button></Link>
      </div>
    )
  }
}

TacoRecipe.proptypes = {
  taco: PropTypes.object
}

export default TacoRecipe;
