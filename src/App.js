import './App.css';
import Counter from './components/Counter';
import Robohash from './components/Robohash';
import MouseMove from './components/MouseMove';
import GiphyApi from './components/Giphy';

function App() {
  return (
    <>
      <Counter />
      <Robohash />
      <MouseMove />
      <GiphyApi />
    </>
  );
}

export default App;
