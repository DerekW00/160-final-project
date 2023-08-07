import CreateEvent from './components/CreateEvent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Calendar from './components/Calendar';
import SignIn from './components/SignIn';
import Landing from './components/Landing';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/CreateEvent' element={<CreateEvent />} />
          <Route path='/Calendar' element={<Calendar />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/Landing' element={<Landing />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
