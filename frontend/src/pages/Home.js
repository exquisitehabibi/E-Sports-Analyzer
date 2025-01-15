import { useState, useEffect, useCallback } from "react";
import { useMatchesContext } from "../hooks/useMatchesContext";
import analyzeGameStats from "../utils/analyzeGameStats"; // Import the analytics function

// components
import MatchDetails from "../components/MatchDetails";
import MatchForm from "../components/MatchForm";

const Home = () => {
  const { matches, dispatch } = useMatchesContext();
  const [analytics, setAnalytics] = useState(null); // State for storing analytics

  const fetchAndAnalyzeMatches = useCallback(async () => {
    const response = await fetch("/api/matches");
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "SET_MATCH", payload: json });

      // Analyze matches and update analytics state
      const analysis = analyzeGameStats(json);
      setAnalytics(analysis);
    }
  }, [dispatch]);

  // Automatically fetch and update analytics on initial render
  useEffect(() => {
    fetchAndAnalyzeMatches();
  }, [fetchAndAnalyzeMatches]);

  return (
    <div className="home">
      <div className="matches">
        <div className="analytics">
          <h2>Game Analytics</h2>
          {analytics ? (
            <ul>
              <li>Total Matches: {analytics.totalMatches}</li>
              <li>Total Kills: {analytics.totalKills}</li>
              <li>Average Kills: {analytics.avgKills}</li>
              <li>Total Revives: {analytics.totalRevives}</li>
              <li>Average Revives: {analytics.avgRevives}</li>
              <li>Total Damage: {analytics.totalDamage}</li>
              <li>Average Damage: {analytics.avgDamage}</li>
              <li>Average Placement: {analytics.avgPlacement}</li>
              <li>Support Score: {analytics.supportScore}</li>
              <li>Aggression Level: {analytics.aggressionLevel}</li>
              <li>Role: {analytics.role}</li>
            </ul>
          ) : (
            <p>Loading analytics...</p>
          )}
        </div>
        {matches &&
          matches.map((match) => (
            <MatchDetails match={match} key={match._id} />
          ))}
      </div>
      <MatchForm fetchAndAnalyzeMatches={fetchAndAnalyzeMatches} />
    </div>
  );
};

export default Home;
