import {Routes, Route} from 'react-router-dom'
import Main from './pages/Main'
import Klondike from './pages/Klondike';
import Missy from './pages/Missy';

import './styles.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/missy' element={<Missy/> } />
        <Route path='/klondike' element={<Klondike/> } />
      </Routes>
    </div>
  );
}

export default App;
