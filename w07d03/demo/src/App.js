import './App.css';
// import Counter from './components/Counter';
import { useState } from 'react';

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

import Navigation from './components/Navigation';

const App = () => {
  const [view, setView] = useState('home');

  return (
    <div className="App">
      <h2>Demo App</h2>

      <Navigation setView={setView} />

      { view === 'home' && 
        <Layout>
          <Home />
        </Layout>
      }

      { view === 'about' && 
        <Layout>
          <About />
        </Layout>
      }
    </div>
  );
};

export default App;
