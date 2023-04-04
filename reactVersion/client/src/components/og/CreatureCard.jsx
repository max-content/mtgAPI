import React, {useEffect, useState } from 'react'
import PropTypes from 'prop-types';

const CreatureCard = ( { card }) => {
  
  return (
    <div>
      <h1> {card.name} {card.mana_cost}</h1>
      <img src={card.image_uris.art_crop}/>
      <h3> {card.type_line} </h3>
      <p> {card.oracle_text} </p>
      <p> {card.flavor_text} </p>
      <h4> {card.artist} </h4>
      <h3> {card.power}/{card.toughness} </h3>

    </div>
  )
}

CreatureCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_uris: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    oracle_text: PropTypes.string.isRequired,
  }).isRequired,
};


export default CreatureCard