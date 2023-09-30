import React from "react";
import ProjectLeftSide from "./ProjectLeftSide";
import ProjectRightSide from "./ProjectRightSide";

const ProjectList = () => {
  return (
    <div className="px-40 pt-20">
      <h1 className="text-6xl font-bold pb-12">projects</h1>
      <div className="pb-16">
        <ProjectLeftSide
          title="Automated TikTok Video Generator"
          techStack="python, pygame, numpy, librosa, beautifulsoup4, requests, moviepy"
          description="A program which generates TikTok videos of visualisations of particles reacting to music features in trending TikTok audios."
          primaryImage="https://github.com/matth1eumartin/matthieumartin/assets/94123711/b39c6ce1-c609-4671-ad39-9e5e5620d822"
          primaryImageAlt="A sample image of the output of the program."
          secondaryImage="https://github.com/matth1eumartin/matthieumartin/assets/94123711/79d13f96-6780-4c54-ae6b-64d7d87d169b"
          secondaryImageAlt="Another sample image of the output of the program."
          projectLink="https://www.tiktok.com/@trendingsoundsvisualised"
        />
        <ProjectRightSide
          title="Globe for Spotify"
          techStack="javascript, react, tailwindcss, spotify api"
          description="A website which allows users to visualise their Spotify listening history on a 3 dimensional interactive globe, seeing where on the planet their favourite songs are listened to. Currently deployed on Vercel."
          primaryImage="https://github.com/matth1eumartin/matthieumartin/assets/94123711/3aa31117-7594-4ee5-9064-98b69c88d4e3"
          primaryImageAlt="A sample image of interaction with the website."
          secondaryImage="https://github.com/matth1eumartin/matthieumartin/assets/94123711/d8291183-be70-409a-b9ef-a86e82c1e714"
          secondaryImageAlt="A sample image of the output of the app."
          projectLink="https://globeforspotify.vercel.app"
        />
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
      </div>
    </div>
  );
};

export default ProjectList;
