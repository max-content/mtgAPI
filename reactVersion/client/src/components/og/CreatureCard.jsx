import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import { CardContainer, ContentContainer, TextBar, ImageWrapper, Stats, Oracle, Flavor, Image, Artist} from './styles/CreatureCardStyle';

const CreatureCard = ( { card }) => {

  // const [cardColorBackground, setCardColorBackground] = useState('');
  // const cardBackgroundStyle = () => {
  //   const colors = card.colors;
  //   const colorPie = [{'W':'white'}, {'U': 'blue'}, {'B': 'black'}, {'R': 'red'}, {'G': 'green'}];
  //   for(const item in colorPie) {
  //     if(colors == item.key) {
  //       console.log(item.value)
  //       setCardColorBackground = item;
  //       console.log(`I AM HERE: ${cardColorBackground}`)
  //       return `--background-style: ${cardColorBackground}`
  //     }
  //   }
  // }

  // add switch statement

  return (
    // <CardContainer style={{ cardBackgroundStyle }}>
      <CardContainer>
        <ContentContainer>
          <TextBar>
            {card.name} {card.mana_cost}
          </TextBar>
          <ImageWrapper>
            <Image src={card.image_uris.art_crop} alt={`${card.name} ${card.mana_cost}, ${card.type_line}, ${card.artist}`}/> 
          </ImageWrapper>
          <TextBar> {card.type_line} </TextBar>
          <Oracle> {card.oracle_text} </Oracle>
          <Flavor> {card.flavor_text} </Flavor>
          <Artist> {card.artist} </Artist>
        </ContentContainer>
        <Stats> {card.power}/{card.toughness} </Stats>
    </CardContainer>
  )
}

CreatureCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type_line: PropTypes.string.isRequired,
    image_uris: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }),
    oracle_text: PropTypes.string.isRequired,
  }),
};


export default CreatureCard