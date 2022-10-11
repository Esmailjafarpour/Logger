import React ,{ useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './components/layout/SearchBar';
import './App.css';

function App() {

  useEffect(() => {
    Materialize.AutoInit();
  })

  return (
    <>
      <SearchBar/>
    </>
  );
}

export default App;
