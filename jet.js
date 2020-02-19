var Jet = function (color, size) {
    this.color = color;
    this.size = size;

    this.fly = function () {
      console.log('whoosh!');
  }
}
  
module.exports = Jet;