import React from 'react';

export default function Blog() {
  return (
    <div>
      <h1>Portfolio</h1>
      
      <section id="Projects" class="container"/ >
            <h3>Projects:</h3>
            
            <div class="container" id="project-list" />

                <div class="container-md">
                    <h5>- Vesuvio Restaurant App </h5>
                    <a href="https://salty-brushlands-40310.herokuapp.com">Link to Live Deployment</a>
                    <br />
                    <a href="https://github.com/hkhalid2/reservationsApp"> Link to Github Repository</a>
                    <br />
                    <img class="container-sm" src="./assets/images/screenshot1.png" width="400" height="300"/>
                    <br />
                    <br />
                    <img class="container-sm" src="./assets/images/screenshot2.png" width="400" height="300"/>
                </div>

                <div class="container-md">
                    <h5>- Note Taker App</h5>
                    <a href="https://sleepy-sands-68935.herokuapp.com"> Link to Live Deployment</a>
                    <br />
                    <a href="https://github.com/hkhalid2/noteTaker">Link to Github Repository</a>
                    <br />
                    <img class="container-sm" src="./assets/images/demo2.gif" width="400" height="300" />
                </div>
                
                <div class="container-md">
                    <h5>- Shield I-D</h5>
                    <a href="https://endlessashley.github.io/Shield-ID/">Link to Live Deployment</a>
                    <br />
                    <a href="https://github.com/endlessashley/Shield-ID">Link to Github Repository</a>
                    <br />
                    <img class="container-sm" src="./assets/images/project.png" width="400" height="300"/>
                </div>



            </div>
        
    
  );
}
