import React from 'react'
import Banner from '../Home/Banner'
import KeyHighlights from '../Home/KeyHighlights'
import StatisticsSection from '../Home/StatisticsSection'
import SuccessStories from '../Home/SuccessStories'
import ResearchInnovation from '../Home/ResearchInnovation'
import ContactPage from '../Home/ContactPage'

function Home() {
  return (
    <>
      <Banner></Banner>
      <KeyHighlights></KeyHighlights>
      <StatisticsSection></StatisticsSection>
      <ResearchInnovation></ResearchInnovation>
      <SuccessStories></SuccessStories>
    </>
  )
}

export default Home