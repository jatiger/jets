var Rocket = function (color, size) {
  this.color = color;
  this.size = size;

  this.launch = function () {
    console.log('3, 2, 1, blastoff!');
  }

  this.engageSecondaryEngines  = function () {
    console.log('Secondary Engines Engaged!');
  };
}

module.exports = Rocket;