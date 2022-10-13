import './App.css'
import './Fonts.css'
import TrendingRow from "./components/TrendingRow";
import TopRatedRow from './components/TopRatedRow';
import HomeTop from './components/HomeTop';

function App() {
  return (
    <div>
      <TrendingRow />
      <TopRatedRow />
    </div>
  );
}

export default App;