import './App.css';
import Counter from './components/Counter';
import Robohash from './components/Robohash';
import MouseMove from './components/MouseMove';
import GiphyApi from './components/Giphy';
import User from './components/User';

function App() {
  return (
    <>
      <Counter />
      <Robohash />
      <MouseMove />
      <GiphyApi />
      <User />
    </>
  );
}

export default App;
