import React from 'react'
import { useParams } from 'react-router-dom';
import RoboticsChampionship from './RoboticsChampionship';
import CodingCompetition from './CodingCompetition';
import ArtsAndDesignContest from './ArtsAndDesignContest'
function ControlRoute() {
  const { id } = useParams();
  console.log(id)
  return (
    <div>
      {id === 'robotics' && <RoboticsChampionship />}
      {id === 'coding' && <CodingCompetition />}
      {id === 'arts' && <ArtsAndDesignContest />}
    </div>
  )
}

export default ControlRoute