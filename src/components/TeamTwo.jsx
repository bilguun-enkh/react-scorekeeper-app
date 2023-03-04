export default function TeamTwo({ team2Points, setTeam2Points }) {
    function addOnePoint() {
        setTeam2Points(team2Points + 1)
    }
    function addTwoPoint() {
        setTeam2Points(team2Points + 2)
    }
    return (
        <div className="team2-container">
            <h1>Team Two</h1>
            <h3>{team2Points}</h3>
            <div className="team2-buttons">
                <button onClick={addOnePoint}>Add 1 Point</button>
                <button onClick={addTwoPoint}>Add 2 Point</button>
            </div>
        </div>
    )
}