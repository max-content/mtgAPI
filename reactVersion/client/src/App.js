import React, { useEffect, useState, createContext } from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';

import Game from './components/Game';

function App() {

    return (
        <div style={{ margin: '120px'}}>
            <Routes>
            
                <Route path='/' element={<Game />} />
            </Routes>
        </div>
    );
}

export default App;
