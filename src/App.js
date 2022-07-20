import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Anime from './pages/anime';
import AnimeDetail from './pages/anime-detail';
import Collection from './pages/collection';
import CollectionDetail from './pages/collection-detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Anime />}></Route>
        <Route path="/detail" element={<AnimeDetail />}></Route>
        <Route path="/my-collection" element={<Collection />}></Route>
        <Route path="/my-collection/:name" element={<CollectionDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
