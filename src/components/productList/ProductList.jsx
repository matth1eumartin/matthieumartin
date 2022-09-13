import "./productList.css";
import Product from "../product/Product";
import {eloanalysis, haskellart, pathfinding, selfdrivingcar, spotifyrecommendations} from "../../data";
import portfolio from "../../img/portfolio.png"
import HomeButton from "../homebutton/HomeButton";

const ProductList = () => {
    return (
        <div className="pl" id="projects">
            <img src={portfolio} alt="stickman coding on a laptop by dall-e 2" width="100" height="100"></img>
            <h1 className="pl-title">Projects <HomeButton></HomeButton></h1>
                <div className = "pl-texts" id="pathfinding-vis">
                    <h2 className="pl-subtitle">Python Pathfinding Algorithm Visualisation</h2>
                    <p className="pl-desc">
                        I created a visualisation of both the A* and Dijkstra pathfinding algorithms
                        using pygame. In this project I developed my understanding of both of the algorithms, 
                        as well as nodes, queues and pygame.
                    </p>
                </div>
                <div className="pl-list">
                    {pathfinding.map((item)=> (
                        <Product key = {item.id} img={item.img} link={item.link}/>
                    ))}
                </div>
                <div className="pl-texts" id="self-driving">
                    <h2 className="pl-subtitle-2">Self Driving Car in JavaScript</h2>
                    <p className="pl-desc">
                        With the help of an online guide from freeCodeCamp, which I customized along the way to make sure I understood, I created a simulation of a car controlled by a neural network swerving through traffic on a busy road from scratch in 
                        JavaScript using no libraries. I also created a visualiser to run alongside the neural network to show how the inputs
                        were acting on the hidden layers and what output they caused. This project helped me put knowledge I had gained while
                        studying towards Codecademy certifications to good use, as I generated a custom reward function for the AI.
                        (it also taught me a lot about patience while debugging)
                    </p>
                </div>
                <div className="pl-list">
                        {selfdrivingcar.map((item)=> (
                            <Product key = {item.id} img={item.img} link={item.link}/>
                        ))}
                </div>

                <div className="pl-texts" id="premier-league">
                    <h2 className="pl-subtitle-2">Premier League Elo Analysis</h2>
                    <p className="pl-desc">
                        I built this project using a dataset from kaggle.com which contained all of the matchday results in the Men's English premier league since the 
                        start of the 1992/93 season. I took this dataset and created an ELO system for it, then passed every result through this algorithm, saving each team's elo at each game.
                        This allowed me to make some very interesting graphs that could identify different teams runs of form, and correlate different runs of form to different outside events
                        such as managers arriving or the club being bought out by new owners that invested heavily.
                    </p>
                </div>
                <div className="pl-list">
                        {eloanalysis.map((item)=> (
                            <Product key = {item.id} img={item.img} link={item.link}/>
                        ))}
                </div>

                <div className="pl-texts" id="haskell-art">
                    <h2 className="pl-subtitle-2">Haskell Art Competition Entry</h2>
                    <p className="pl-desc">
                        This was my entry to the Haskell art Competition held as a year-wide event (open to 400+ students) at the end of the first semester. I was inspired by research conducted by
                        IBM in the 1960's, which involved drawing moving shapes using parametric equations. This project needed me to figure out a lot of things on my own, as I quickly found out 
                        how difficult it is to find documentation for how to install and use different Haskell extensions. However, I persevered and managed to come up with an entry that won
                        5th place. This was also my first time using git and github, so I learned a lot about version control and writing documentation while creating this project.  

                    </p>
                </div>
                <div className="pl-list">
                        {haskellart.map((item)=> (
                            <Product key = {item.id} img={item.img} link={item.link}/>
                        ))}
                </div>

                <div className="pl-texts" id="working-on">
                    <h3 className="pl-subtitle-2">Currently Working on:</h3>
                    <h2>Spotify Song Recommendations</h2>
                    <p className="pl-desc">
                          This project is helping me improve my ability to work with API's. I am using the Spotify Web API
                          with Python to build a program that fetches a user's Top 10 songs from the last 6 months and will
                          recommend songs based on those 10 songs.
                    </p>
                </div>
                <div className="pl-list">
                        {spotifyrecommendations.map((item)=> (
                            <Product key = {item.id} img={item.img}/>
                        ))}
                </div>
                                  
        </div>
    )
}

export default ProductList;