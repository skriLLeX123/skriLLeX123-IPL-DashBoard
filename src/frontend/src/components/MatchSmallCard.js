import {React} from 'react';
import {Link} from 'react-router-dom';
import './MatchSmallCard.scss';
export const MatchSmallCard = ({teamName, match}) => {
    if(!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRouter = `/teams/${otherTeam}`;
    const isMatchWon = teamName === match.matchWinner;

  return (
    <div className="MatchSmallCard">
     <span className="vs">vs</span>
     <p className="small-team-name"> <Link to={otherTeamRouter}>   {otherTeam}</Link></p>
     <p className={isMatchWon? 'won-card match-result':'lost-card match-result'}>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  );
}


