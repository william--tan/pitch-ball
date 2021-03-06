function Pipe() {
  var gap = random(150, height / 2); // gap wide
  var gapPosition = random(gap, height - gap); // gap positions

  this.top = gapPosition - gap / 2;
  this.bottom = height - (gapPosition + gap / 2);
  this.x = width;
  this.w = 0.03*width;
  this.speed = 4;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y+16 < this.top || bird.y+16 > height - this.bottom) {
      if (bird.x+16 > this.x && bird.x+16 < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }
// function that will keep on loop.
  this.show = function() {
    noStroke();
    fill(255);
    if (this.highlight) { // bar color
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }
// function for pipes speed
  this.update = function(dead) {
      if (dead == false) {
        this.x -= this.speed;
      }

  }
// will remove pipes that already off the screen
  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
// point will increase after the pipes are behind the ball
  this.points = function() {
    if (this.x >= 0.077*width && this.x <= 0.08*width) {
      return true;
    } else {
      return false;
    }
  }
}
