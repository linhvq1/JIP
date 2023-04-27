import { useState } from 'react'
import { Provider } from 'mobx-react';
import { createMemoryHistory } from "history";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Navigate,
  Routes,
} from "react-router-dom";
import {stores} from './stores';
import Home from './pages/Home';

const history = createMemoryHistory();

function App() {

  return (
    <Provider  {...stores}>
      <Router>
          <Routes >
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </Provider>
  )
}

export default App
