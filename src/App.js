import { useState } from 'react';
import './App.css';
import TeamOne from './components/TeamOne';
import TeamTwo from './components/TeamTwo';
function App() {
  const [team1Points, setTeam1Points] = useState(0)
  const [team2Points, setTeam2Points] = useState(0)
  return (
    <div className="main-container">
      <TeamOne team1Points={team1Points} setTeam1Points={setTeam1Points} />
      <TeamTwo team2Points={team2Points} setTeam2Points={setTeam2Points} />
    </div>
  );
}

export default App;
