import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/main/Header";
import Home from './components/main/Home';
import AllProjects from "./components/pages/AllProjects";
import Iswa from "./components/projects/Iswa"
import NetworkGraph from './components/projects/NetworkGraph';


function App() {
  return (   
    <Router>
      <Header />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/allprojects' element={<AllProjects/>} />
          <Route path='/project/iswa' element={<Iswa/>} />
          <Route path='/project/networkgraph' element={<NetworkGraph/>} />
          
      </Routes>
    </Router>
  );
}

export default App;
