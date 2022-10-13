import './App.css'
import './Fonts.css'
import TrendingRow from "./components/TrendingRow";
import TopRatedTVRow from './components/TopRatedTVRow';
import TopRatedMovieRow from './components/TopRatedMovieRow';
import ActionMovieRow from './components/ActionMovieRow';
import ComedyMovieRow from './components/ComedyMovieRow';
import HorrorMovieRow from './components/HorrorMovieRow';

function App() {
  return (
    <div>
      <TrendingRow />
      <TopRatedTVRow />
      <TopRatedMovieRow />
      <ActionMovieRow />
      <ComedyMovieRow />
      <HorrorMovieRow />
    </div>
  );
}

export default App;