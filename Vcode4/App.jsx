
import { ReactDOM } from 'react-dom';
import { BrowserRouter , Link, Route , Switch } from 'react-router-dom';
import { Home } from './src/Home';
import { Page1 } from './src/Page1';

 export const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>

      <Link to="/">Home</Link>
      <br />
      
      <Link to="/page1">Page1</Link>
      <br />

      <Switch>
       <Route exact path='/'>
         <Home />
       </Route>
      
       <Route exact path='/page1'>
         <Page1 />
       </Route>
      
      </Switch>
      </div>

    
    </BrowserRouter>
  )
}