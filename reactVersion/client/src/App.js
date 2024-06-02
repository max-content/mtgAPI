import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import Game from './components/Game';

function App() {

  return (
    <div>

      <Routes>
        <Route path='/disharmony' element={<Game />} />
      </Routes>

    </div>
  );
}

export default App;
