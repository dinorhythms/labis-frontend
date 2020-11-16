import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
			<Switch>
				<Route exact path="/" render={()=> <h1>Landing Page</h1>}/>
				<Route path="/signin" render={()=> <h1>Sign in Page</h1>}/>
			</Switch>
    </div>
  );
}

export default App;
