import React from 'react'
import { useParams } from 'react-router-dom';
import TechClubDetails from './TechClubDetails';
import CultureClubDetails from './CultureClubDetails'
import HackethonClubDetails from './HackathonClubDetails'

function HackRoute() {
  const { id } = useParams();
  return (
    <div>
      {id === 'tech' && <TechClubDetails />}
      {id === 'culture' && <CultureClubDetails />}
      {id === 'hackathons' && <HackethonClubDetails />}
    </div>
  )
}

export default HackRoute