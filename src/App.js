import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Main />
        <About />
      </div>
    </div>
  );
}

export default App;
