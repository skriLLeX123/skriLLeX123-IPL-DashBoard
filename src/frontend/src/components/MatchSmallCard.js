import {React} from 'react';
import {Link} from 'react-router-dom';

export const MatchSmallCard = ({teamName, match}) => {
    if(!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRouter = `/teams/${otherTeam}`;
  return (
    <div className="MatchSmallCard">
     <p> vs 
         <Link to={otherTeamRouter}>   {otherTeam}</Link></p>
     <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  );
}


