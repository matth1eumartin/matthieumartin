import React from 'react';
import ProjectLeftSide from './ProjectLeftSide';
import ProjectRightSide from './ProjectRightSide';

const ProjectList = () => {
  return (
    <div className='px-40 pt-20'>
        <h1 className='text-6xl font-bold pb-12'>projects</h1>
        <div className='pb-16'>
          <ProjectLeftSide 
          title="Pathfinding Visualisation"
          techStack="python, pygame"
          description="I created a visualisation of the A* and Dijkstra pathfinding algorithms using pygame."
          primaryImage="https://user-images.githubusercontent.com/94123711/188642392-32cd993d-4c66-4c2b-8667-43e51ce5b01f.gif"
          primaryImageAlt="A short gif of the A* algorithm operating on a grid of nodes."
          secondaryImage="https://user-images.githubusercontent.com/94123711/189365987-f01689d5-0634-4c28-b8c8-79539b2d6fd0.gif"
          secondaryImageAlt="A short gif of the Dijkstra algorithm operating on a grid of nodes."
          projectLink="https://github.com/matth1eumartin/Pathfinding-Visualisation"
          />
          <ProjectRightSide
          title="Premier League Elo Analysis"
          techStack="python, matplotlib, pandas"
          description="Using a dataset which contained all the results in the English Men's premier league since 1992/32, I created an ELO system to rank the teams and identify the best teams of all time."
          primaryImage="https://user-images.githubusercontent.com/94123711/188881142-a251c652-c282-41c9-a615-9367b1bfee86.png"
          primaryImageAlt="A graph depicting the output of the ELO system on Arsenal F.C. fixtures."
          secondaryImage="https://user-images.githubusercontent.com/94123711/188881110-86c679db-7dc3-432c-b5e2-0288e6cdf40d.png"
          secondaryImageAlt="A graph depicting the output of the ELO system on Manchester United F.C. fixtures."
          projectLink="https://github.com/matth1eumartin/PremierLeagueElos"
          />
          <ProjectLeftSide 
          title="Haskell Art Competition Entry"
          techStack="haskell, gloss"
          description="My entry to the INF1A Haskell Art Competition held at the end of my first semester, which won 5th place."
          primaryImage="https://lollobaldo.github.io/fp-competition-2021/webpage/curves.gif"
          primaryImageAlt="A gif showing the animation of lines being mapped between points on parametic curves."
          secondaryImage=""
          secondaryImageAlt=""
          projectLink="https://github.com/matth1eumartin/Inf1A-FP-Comp"
          />
          <ProjectRightSide
          title="Statify"
          techStack="javascript, react.js, axios"
          description="A web application using react.js that uses the Spotify API to generate the top 10 songs that a use has listened to over the path month."
          primaryImage="https://user-images.githubusercontent.com/94123711/193327670-b5249ff5-38b4-4c75-8c20-ea56028959f2.png"
          primaryImageAlt="An image of the Statify homepage."
          secondaryImage="https://user-images.githubusercontent.com/94123711/193328201-3f2057ae-6760-416e-9299-2390e09904af.png"
          secondaryImageAlt="An example output of the Statify results."
          projectLink="https://matth1eumartin.github.io/statify/"
          />
        </div>
    </div>
  )
}

export default ProjectList