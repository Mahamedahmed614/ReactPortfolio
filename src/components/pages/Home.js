import React from "react";




function Home() {
  return (
    <div style={{ backgroundColor: "#008080", textAlign: 'center' }}>
      <p style={{ color: "white" }}> Greetings my name is Mahamed Ahmed, Born and Rasied in Columbus, Ohio. Currently 21 years old and attend The Ohio State bootcamp. Growing up I always loved trying new things and thats what drew coding into my attention.</p>
      <p style={{ color: "white" }}>From playing coding games to watching hour long videos I always was fascinated in the fast growing tech industry. </p>

      <h3 style={{ color: "white", textAlign: 'center' }}> Skills </h3>
      <div class="row" style={{ marginTop: "5rem", padding: '5rem' }}>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"> Front-end</h5>
              <ul class="list-group">
                <li class="list-group-item list-group-item-dark">HTML</li>
                <li class="list-group-item">CSS</li>
                <li class="list-group-item list-group-item-dark">JavaScript</li>
                <li class="list-group-item">jQuery</li>
                <li class="list-group-item list-group-item-dark">Nodejs</li>
                <li class="list-group-item">Reactjs</li>
              </ul>

            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Back-end</h5>
              <ul class="list-group">
                <li class="list-group-item list-group-item-dark">mySQL</li>
                <li class="list-group-item">MongoDb</li>
                <li class="list-group-item list-group-item-dark">Express</li>
                <li class="list-group-item">Nodejs</li>
              </ul>


            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Home;