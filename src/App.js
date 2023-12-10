import './App.css';
import Blog from './components/Blog';
import Display from './components/Display';
import List from './components/List';
import Edit from './components/Edit';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element= {<List></List>}></Route>
      <Route exact path='/createblog' element= {<Blog></Blog>}></Route>
      <Route exact path='/display/:id' element= {<Display></Display>}></Route>
      <Route exact path='/edit/:id' element= {<Edit></Edit>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
