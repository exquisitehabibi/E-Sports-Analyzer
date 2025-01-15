import { useMatchesContext } from '../hooks/useMatchesContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const MatchDetails = ({ match }) => {
  const { dispatch } = useMatchesContext()

  const handleClick = async () => {
    const response = await fetch('/api/matches/' + match._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_MATCH', payload: json})
    }
  }

  return (
    <div className="match-details">
  <h4>{match._id}</h4>
  <p><strong>Kills: </strong>{match.kills}</p>
  <p><strong>Time Survived: </strong>{match.time_survived}</p>
  <p><strong>Revives: </strong>{match.revives}</p>
  <p><strong>Knocks: </strong>{match.knocks}</p>
  <p><strong>Ranking: </strong>{match.ranking}</p>
  <p><strong>Damage Dealt: </strong>{match.damage_dealt}</p>
  <p><strong>Assists: </strong>{match.assists}</p>
  <p><strong>Healing Used: </strong>{match.healing_used}</p>
  <p>{formatDistanceToNow(new Date(match.createdAt), { addSuffix: true })}</p>
  <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
</div>

  )
}

export default MatchDetails