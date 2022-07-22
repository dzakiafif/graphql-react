import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage, Collection, AnimeDetail } from "./pages"
import Template from './pages/template';
import { ROUTES } from './routes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Template><Homepage/></Template>}></Route>
        <Route path={ROUTES.COLLECTION} element={<Template><Collection/></Template>}></Route>
        <Route path={ROUTES.ANIME_DETAIL} element={<Template><AnimeDetail/></Template>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
