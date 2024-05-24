import React, { useEffect, useState } from 'react';

import DiscordLODDeck from './og/DiscordLODDeck';

const Game = () => {
  // const colorPie = [ 'W', 'U', 'B', 'R', 'G' ];

  const [color, setColor] = useState('W')
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      
      <DiscordLODDeck  />
    </div>
  );
};

export default Game;