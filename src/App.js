import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Main />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
