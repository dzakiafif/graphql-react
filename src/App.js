import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage, Collection } from "./pages"
import Template from './pages/template';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Template><Homepage/></Template>}></Route>
        <Route path="/collection" element={<Template><Collection/></Template>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
