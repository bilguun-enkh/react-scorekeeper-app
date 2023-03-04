export default function TeamOne({ team1Points, setTeam1Points }) {
    function addOnePoint() {
        setTeam1Points(team1Points + 1)
    }
    function addTwoPoint() {
        setTeam1Points(team1Points + 2)
    }
    return (

        <div className="team1-container">
            <h1>Team One</h1>
            <h3>{team1Points}</h3>
            <div className="team1-buttons">
                <button onClick={addOnePoint}>Add 1 Point</button>
                <button onClick={addTwoPoint}>Add 2 Point</button>
            </div>
        </div>
    )
}