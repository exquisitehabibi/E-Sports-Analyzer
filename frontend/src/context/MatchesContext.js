import { createContext, useReducer } from 'react'

export const MatchesContext = createContext()

export const matchesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MATCH':
      return { 
        matches: action.payload 
      }
    case 'CREATE_MATCH':
      return { 
        matches: [action.payload, ...state.matches] 
      }
    case 'DELETE_MATCH':
      return { 
        matches: state.matches.filter(m => m._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const MatchesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(matchesReducer, { 
    matches: null
  })
  
  return (
    <MatchesContext.Provider value={{ ...state, dispatch }}>
      { children }
    </MatchesContext.Provider>
  )
}
