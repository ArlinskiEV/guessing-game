class GuessingGame {
    constructor() {
      var first;
      var last;
    }

    setRange(min, max) {
      first=min;
      last=max;
    }

    guess() {
      return (first+last)/2;
    }

    lower() {
      last=(first+last)/2;
    }

    greater() {
      first=(first+last)/2;
    }
}

module.exports = GuessingGame;
