import CreateParty from './components/CreateParty';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';
import Calendar from './components/Calendar';

function App() {
  return (
    <div>
      {/* <h3>hello world</h3> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/CreateParty' element={<CreateParty />} />
          <Route path='/Calendar' element={<Calendar />} />
          {/* <Navigate to='/' /> */}
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
