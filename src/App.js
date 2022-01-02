import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import CubeOfTruth from './components/Cube/CubeOfTruth';
import HeroList from './components/HeroList/HeroList';
import Hero from './components/Hero/Hero';
import Team from './components/TeamComp/Team';
import PageNotFound from './components/PageNotFound';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HashRouter>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Routes>
        <Route path='/' />
        <Route
          path='/hero-list'
          element={<HeroList setShowMenu={setShowMenu} />}
        />
        <Route
          path='/hero-list/:heroName'
          element={<Hero setShowMenu={setShowMenu} />}
        />
        <Route
          path='/cube'
          element={<CubeOfTruth setShowMenu={setShowMenu} />}
        />
        <Route
          path='/team-builder'
          element={<Team setShowMenu={setShowMenu} />}
        />
        <Route
          path='/team-builder/:builderData'
          element={<Team setShowMenu={setShowMenu} />}
        />
        <Route path='*' element={<PageNotFound setShowMenu={setShowMenu} />} />
      </Routes>
      <Footer setShowMenu={setShowMenu} />
    </HashRouter>
  );
}

export default App;
