const game = {
  // create some properties to hold current wins, losses and ties
  wins: 0,
  losses: 0,
  ties: 0,

  // add a property for keeping track of all the letters played
  plays: [],

  // create a function to start the game.
  // this is short hand for start: function () {}
  start() {
    const self = this

    // listen for a keyup event and process the attempt to play
    document.onkeyup = e => self.processPlay(e.key)
  },

  // function that takes a letter and updates the score
  processPlay(letter) {
    const self = this

    if (letter === 'w') self.wins++
    else if (letter === 'l') self.losses++
    else if (letter === 't') self.ties++
    else if (letter === 'r') self.wins = self.losses = self.ties = 0

    // store the play on the object so you can inspect the game object and see all typed keys
    self.plays.push(letter)
    self.displayScores()
  },

  // get the DOM element #game and update with new scores
  // this is short hand for updateScores: function () {}
  displayScores() {
    const self = this

    const el = document.getElementById('game')
    const html = '<h2>Current Scores</h2>' +
      '<p>Wins: ' + self.wins + '</p>' +
      '<p>Losses: ' + self.losses + '</p>' +
      '<p>Ties: ' + self.ties + '</p>'

    el.innerHTML = html
  }
}

// start the game!
game.start()
