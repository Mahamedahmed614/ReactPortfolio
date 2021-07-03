import React from 'react'

const Projects = () => {
    return (
        <div style={{ backgroundColor: "#008080", marginBottom: '0' }}>
            <h2 style={{ textAlign: 'center', color: 'white' }}>Group Projects</h2>
            <div class="card-deck" style={{ padding: "3rem" }}>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Project Marvel</h5>
                        <p class="card-text">Project Marvel application is set to allow users to search their favorite comic characters and retrieve their comic desctiption. If they desire they can pull movies up and get the Movie plot, statstics, director(s),writer(s), actors and movie reviews.</p>
                        <ul class="list-group">

                            <li class="list-group-item list-group-item-secondary">Marvel API</li>
                            <li class="list-group-item list-group-item-secondary">OMDB</li>
                            <li class="list-group-item list-group-item-secondary">W3schools</li>
                            <li class="list-group-item list-group-item-secondary">bootstrap</li>

                        </ul>
                        <a href="https://github.com/TLH3810/Project-01_MarvelApp" target='_blank ' style={{ marginLeft: '2rem' }}>Github Repo</a>
                        <a href="https://tlh3810.github.io/Project-01_MarvelApp/" target='_blank ' style={{ marginLeft: '2rem' }}>Deployed App</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Lost-Found</h5>
                        <p class="card-text">allows user to submit items they've lost and may not be able to retrieve themselves. Users can upload an item name, detailed description, and reward amount.</p>
                        <ul class="list-group">

                            <li class="list-group-item list-group-item-secondary">HandleBars</li>
                            <li class="list-group-item list-group-item-secondary">Heroku</li>
                            <li class="list-group-item list-group-item-secondary">JavaScript</li>
                            <li class="list-group-item list-group-item-secondary">Express</li>

                        </ul>
                        <a href="https://github.com/Youngin9210/Lost-Found" target='_blank ' style={{ marginLeft: '2rem' }}>Github Repo</a>
                        <a href="https://glacial-fortress-45860.herokuapp.com/" target='_blank ' style={{ marginLeft: '2rem' }}>Deployed App</a>

                    </div>
                </div>

            </div>
            <h2 style={{ textAlign: 'center', color: 'white' }}>Self Made Applications</h2>
            <div class="card-deck" style={{ padding: "3rem" }}>
                <div class="card">

                    <div class="card-body">
                        <h5 class="card-title">Progressive-Budget</h5>
                        <p class="card-text">This application is a budget tracker that lets users add and subtract their expenses as well as add there deposits so that they can keep track of their budget.</p>
                        <a href="https://github.com/Mahamedahmed614/Progressive-budget" target='_blank ' style={{ marginLeft: '2rem' }}>Github Repo</a>
                    </div>
                </div>
                <div class="card">

                    <div class="card-body">
                        <h5 class="card-title">Fitness-Tracker</h5>
                        <p class="card-text"> This application is a fitness tracker that helps the user view and enter information regarding their exercise information and keep recent workouts which is cool they have history of their previous exercises.</p>
                        <a href="https://github.com/Mahamedahmed614/Fitness-tracker" target='_blank ' style={{ marginLeft: '2rem' }}>Github Repo</a>
                    </div>
                </div>
                <div class="card">

                    <div class="card-body">
                        <h5 class="card-title">WeatherForMe</h5>
                        <p class="card-text"> As a traveler we all would like to be ready for whatever weather conditions we may fall into so we rather like to be prepared to whatever the weather may bring.</p>
                        <a href="https://github.com/Mahamedahmed614/WeatherForMe" target='_blank ' style={{ marginLeft: '2rem' }}>Github Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects