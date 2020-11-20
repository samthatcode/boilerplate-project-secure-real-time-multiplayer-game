class Collectible {
  constructor({x, y, value, id}) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.id = id;
    this.radius = 20
  }
  
  draw(context,img) {
    /*context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.stroke();*/
    context.drawImage(img, this.x-this.radius, this.y-this.radius, 2*this.radius, 2*this.radius);
  }

}

/*
  Note: Attempt to export this for use
  in server.js
*/
try {
  module.exports = Collectible;
} catch(e) {}

export default Collectible;
