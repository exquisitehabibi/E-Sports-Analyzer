function analyzeGameStats(stats) {
    const analysis = {};

    // Basic Aggregates
    analysis.totalMatches = stats.length;
    analysis.totalKills = stats.reduce((sum, match) => sum + (match.kills || 0), 0);
    analysis.avgKills = (analysis.totalKills / analysis.totalMatches).toFixed(2);
    analysis.totalRevives = stats.reduce((sum, match) => sum + (match.revives || 0), 0);
    analysis.avgRevives = (analysis.totalRevives / analysis.totalMatches).toFixed(2);
    analysis.totalKnocks = stats.reduce((sum, match) => sum + (match.knocks || 0), 0);
    analysis.avgKnocks = (analysis.totalKnocks / analysis.totalMatches).toFixed(2);
    analysis.totalDamage = stats.reduce((sum, match) => sum + (match.damage_dealt || 0), 0);
    analysis.avgDamage = (analysis.totalDamage / analysis.totalMatches).toFixed(2);
    analysis.avgTimeSurvived = (
        stats.reduce((sum, match) => sum + (match.time_survived || 0), 0) / analysis.totalMatches
    ).toFixed(2);
    analysis.avgPlacement = (
        stats.reduce((sum, match) => sum + (match.ranking || 0), 0) / analysis.totalMatches
    ).toFixed(2);
    analysis.totalAssists = stats.reduce((sum, match) => sum + (match.assists || 0), 0);
    analysis.avgAssists = (analysis.totalAssists / analysis.totalMatches).toFixed(2);
    analysis.totalHealing = stats.reduce((sum, match) => sum + (match.healing_used || 0), 0);
    analysis.avgHealing = (analysis.totalHealing / analysis.totalMatches).toFixed(2);

    // Derived Metrics
    // K/D ratio considers every match
    analysis.killDeathRatio = (
        analysis.totalKills / analysis.totalMatches
    ).toFixed(2);

    analysis.supportScore = (analysis.totalRevives + analysis.totalAssists).toFixed(2);
    analysis.aggressionLevel = (analysis.totalKills + analysis.totalKnocks).toFixed(2);

    // Categorization (optional)
    if (analysis.avgKills > 5) {
        analysis.role = "Assaulter";
    } else if (analysis.avgRevives > 2) {
        analysis.role = "Support";
    } else if (analysis.avgPlacement < 3) {
        analysis.role = "IGL";
    } else {
        analysis.role = "All-rounder";
    }

    return analysis;
}

module.exports = analyzeGameStats;
