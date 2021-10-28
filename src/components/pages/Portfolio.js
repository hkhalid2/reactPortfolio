import React from 'react';
import Screenshot1 from '../../images/screenshot1.png';
import Screenshot2 from '../../images/screenshot2.png';
import DemoGif from '../../images/demo2.gif';
import Demo2Gif from '../../images/demo.gif';
import ProjectShot from '../../images/project.png';
import BudgetShot from '../../images/screenshot.png';
import WeatherGif from '../../images/weather.gif';
import '../../styles/style.css';


export default function Blog() {
  return (
    <div>
      <h1>Portfolio</h1>
      

            <h3>Projects:</h3>
            

                <div class="container-md">
                    <h5>- Vesuvio Restaurant App </h5>
                    <a href="https://salty-brushlands-40310.herokuapp.com">Link to Live Deployment</a>
                    <br />
                    <a href="https://github.com/hkhalid2/reservationsApp"> Link to Github Repository</a>
                    <br />
                    <img class="container-sm" src={Screenshot1} width="300" height="300"/>
                    <br />
                    <br />
                    <img class="container-sm" src={Screenshot2} width="300" height="300"/>
                </div>

                <div class="container-md">
                    <h5>- Note Taker App</h5>
                    <a href="https://sleepy-sands-68935.herokuapp.com"> Link to Live Deployment</a>
                    <br />
                    <a href="https://github.com/hkhalid2/noteTaker">Link to Github Repository</a>
                    <br />
                    <img class="container-sm" src={DemoGif} width="300" height="300" />
                </div>
                
                <div class="container-md">
                    <h5>- Shield I-D</h5>
                    <a href="https://endlessashley.github.io/Shield-ID/">Link to Live Deployment</a>
                    <br />
                    <a href="https://github.com/endlessashley/Shield-ID">Link to Github Repository</a>
                    <br />
                    <img class="container-sm" src={ProjectShot} width="300" height="300"/>
                </div>

                <div class="container-md">
                    <h5>- Budget Tracker</h5>
                    <a href="https://obscure-reef-64359.herokuapp.com">Link to Live Deployment</a>
                    <br />
                    <a href="https://github.com/hkhalid2/budgetTracker">Link to Github Repository</a>
                    <br />
                    <img class="container-sm" src={BudgetShot} width="300" height="300"/>
                </div>

                <div class="container-md">
                    <h5>- Work Day Scheduler</h5>
                    <a href="https://hkhalid2.github.io/Homework5WorkDaySched/ ">Link to Live Deployment</a>
                    <br />
                    <a href="https://github.com/hkhalid2/Homework5WorkDaySched">Link to Github Repository</a>
                    <br />
                    <img class="container-sm" src={Demo2Gif} width="300" height="300"/>
                </div>

                <div class="container-md">
                    <h5>- Weather Dashboard</h5>
                    <a href="https://hkhalid2.github.io/weatherDashboard/">Link to Live Deployment</a>
                    <br />
                    <a href="https://github.com/hkhalid2/weatherDashboard ">Link to Github Repository</a>
                    <br />
                    <img class="container-sm" src={WeatherGif} width="300" height="300"/>
                </div>



            </div>
        
    
  );
}
