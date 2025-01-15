import { useState } from 'react'
import { useMatchesContext } from '../hooks/useMatchesContext'

const MatchForm = ({ fetchAndAnalyzeMatches }) => {
  const { dispatch } = useMatchesContext()

  const [kills, setKills] = useState('')
  const [timeSurvived, setTimeSurvived] = useState('')
  const [revives, setRevives] = useState('')
  const [knocks, setKnocks] = useState('')
  const [ranking, setRanking] = useState('')
  const [damageDealt, setDamageDealt] = useState('')
  const [assists, setAssists] = useState('')
  const [healingUsed, setHealingUsed] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const match = {
      kills, 
      time_survived: timeSurvived, 
      revives, 
      knocks, 
      ranking, 
      damage_dealt: damageDealt, 
      assists, 
      healing_used: healingUsed
    }
    
    const response = await fetch('/api/matches', {
      method: 'POST',
      body: JSON.stringify(match),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setKills('')
      setTimeSurvived('')
      setRevives('')
      setKnocks('')
      setRanking('')
      setDamageDealt('')
      setAssists('')
      setHealingUsed('')
      dispatch({type: 'CREATE_MATCH', payload: json})

      // Update analytics after match is added
      fetchAndAnalyzeMatches();
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Match</h3>

      {/* Input fields for match details */}
      <div className="form-group">
        <label>Kills:</label>
        <input 
          type="number" 
          onChange={(e) => setKills(e.target.value)} 
          value={kills}
          className={emptyFields.includes('kills') ? 'error' : ''}
        />
      </div>

      <div className="form-group">
        <label>Time Survived:</label>
        <input 
          type="text" 
          onChange={(e) => setTimeSurvived(e.target.value)} 
          value={timeSurvived}
          className={emptyFields.includes('time_survived') ? 'error' : ''}
        />
      </div>

      <div className="form-group">
        <label>Revives:</label>
        <input 
          type="number" 
          onChange={(e) => setRevives(e.target.value)} 
          value={revives}
          className={emptyFields.includes('revives') ? 'error' : ''}
        />
      </div>

      <div className="form-group">
        <label>Knocks:</label>
        <input 
          type="number" 
          onChange={(e) => setKnocks(e.target.value)} 
          value={knocks}
          className={emptyFields.includes('knocks') ? 'error' : ''}
        />
      </div>

      <div className="form-group">
        <label>Ranking:</label>
        <input 
          type="number" 
          onChange={(e) => setRanking(e.target.value)} 
          value={ranking}
          className={emptyFields.includes('ranking') ? 'error' : ''}
        />
      </div>

      <div className="form-group">
        <label>Damage Dealt:</label>
        <input 
          type="number" 
          onChange={(e) => setDamageDealt(e.target.value)} 
          value={damageDealt}
          className={emptyFields.includes('damage_dealt') ? 'error' : ''}
        />
      </div>

      <div className="form-group">
        <label>Assists:</label>
        <input 
          type="number" 
          onChange={(e) => setAssists(e.target.value)} 
          value={assists}
          className={emptyFields.includes('assists') ? 'error' : ''}
        />
      </div>

      <div className="form-group">
        <label>Healing Used:</label>
        <input 
          type="number" 
          onChange={(e) => setHealingUsed(e.target.value)} 
          value={healingUsed}
          className={emptyFields.includes('healing_used') ? 'error' : ''}
        />
      </div>

      <button>Add Match</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default MatchForm;
