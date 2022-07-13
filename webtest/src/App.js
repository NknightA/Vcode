import {Home} from './components/Home';
import { Link , BrowserRouter,Switch} from 'react-router-dom';

function App () {
	return (
		<BrowserRouter>
		 <div className="App">
		  <Link to="/">
		   <br />
		  </Link>

		  <Switch>
		   <Route path='/'>
		    <Home />
		   </Route>
		  </Switch>
		 </div>
		</BrowserRouter>
	);
};


export default App;
