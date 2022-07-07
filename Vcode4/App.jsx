import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BrowserRouter , Link, Route , Switch } from 'react-router-dom';
import { Page1 } from './src/Page1';

function App () {
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

      
      <Route path='/page1'>
        <Page1 />
      </Route>
      </Switch>
      </div>

    
    </BrowserRouter>
  )
}
