import React from 'react';

const https = require("https"); // Native module, no need to explicitly install

const baseURL = "https://v2.jokeapi.dev";
const categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];
const params = [
  "blacklistFlags=nsfw, religious, political, racist, sexist, explicit",
  "idRange=0-100"
];

https.get(`${baseURL}/joke/${categories.join(",")}?${params.join("&")}`, res => {
  console.log("\n");
  res.on("data", chunk => {
    // On data received, convert it to a JSON object
    let randomJoke = JSON.parse(chunk.toString());

    if (randomJoke.type === "single") {
      // If type == "single", the joke only has the "joke" property
      console.log(randomJoke.joke);
      console.log("\n");
    }
    else {
      // If type == "twopart", the joke has the "setup" and "delivery" properties
      console.log(randomJoke.setup);
      setTimeout(() => {
        console.log(randomJoke.delivery);
        console.log("\n");
      }, 3000);
    }
  });

  res.on("error", err => {
    // On error, log to console
    console.error(`Error: ${err}`);
  });
});


// API CALL
const JokeAPI = require('sv443-joke-api');

JokeAPI.getJokes()
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })

class Jokes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <h2>Jokes</h2>
        <div id="joke-container">
          <h2 id="joke--text"></h2>
        </div>
      </>
    )
  }
}
export default Jokes;
