import './App.css';
import Header from './components/Header';
import ToDosContainer from './components/ToDosContainer';

function App() {
  return (
    <div className="App">
      <div className='header text-center'>
        <Header />
      </div>
      <div className= "task-container">
        <ToDosContainer />
      </div>
    </div>
  );
}

export default App;
