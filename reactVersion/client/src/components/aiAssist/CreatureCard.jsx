import PropTypes from 'prop-types';

function CreatureCard({ card }) {
  return (
    <div>
      <h2>{card.name}</h2>
      <img src={card.image_uris.small} alt={card.name} />
      <p>{card.oracle_text}</p>
      {card.flavor_text ? <p> {card.flavor_text}</p> : <></>}
    </div>
  );
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

export default CreatureCard;