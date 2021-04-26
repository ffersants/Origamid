import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Info from './components/Info'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        
        <Route path="/">
          <Home />
        </Route>
        
        <Route path="info">
          <Info />
        </Route>
        {/* <Route path="*" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
