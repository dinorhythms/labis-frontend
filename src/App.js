import modules from './modules';

const { Public, Private } = modules;

function App() {
  return (
    <div className="App">
			<Public/>
			<Private/>
    </div>
  );
}

export default App;
