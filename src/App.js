import CreateParty from './components/CreateParty';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div>
      {/* <h3>hello world</h3> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/CreateParty" element={<CreateParty />} />
          {/* <Navigate to='/' /> */}
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
