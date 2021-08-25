import {React, useEffect, useState} from 'react';
import './HomePage.scss';
import { TeamTile } from '../components/TeamTile';
export const HomePage = () => {

    const [teams, setTeams] = useState([]);
    
    useEffect(
        
        ()=>{
            const fetchAllTeams = async()=>{
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/`);
                console.log(response);
                const data = await response.json();
                setTeams(data);
            };
            fetchAllTeams();
        }, []
    );

    return (
     <div className="HomePage">
        <div className="header-section"> <h3 className="app-name">IPL DashBoard</h3></div>
    <div className="team-grid">{teams.map(team=> <TeamTile key={team.id} teamName={team.teamName}/>)}</div>
    </div>
  );
}


