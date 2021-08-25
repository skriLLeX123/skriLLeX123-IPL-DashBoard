import {React} from 'react';
import './TeamTile.scss';
import {Link} from 'react-router-dom';
export const TeamTile = ({teamName}) => {
    const url = '/resources/'+teamName+'.jpg';
  return (
      <div className="TeamTile">
          <img className="logo" src={url} alt=''></img>
          <h1 className="team-title"><Link to={`/teams/${teamName}`}>{teamName}</Link></h1>
      </div>
   
  );
}


