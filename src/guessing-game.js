class GuessingGame {
    constructor() {
      var first=0;
      var last=0;
    }

    half(a, b) {
      if ((a+b)%2==1) {
        return Math.round((a+b+1)/2);
      } else {
        return Math.round((a+b-1)/2);
      }
    }

    setRange(min, max) {
      this.first=min;
      this.last=max;
    }

    guess() {
      return this.half(this.first, this.last);
    }

    lower() {
      this.last=this.half(this.first, this.last);
    }

    greater() {
      this.first=this.half(this.first, this.last);
    }
}

module.exports = GuessingGame;
