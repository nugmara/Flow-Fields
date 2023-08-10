const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas settings
console.log(ctx);
ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 1;

class Particle {
  constructor(effect) {
    this.effect = effect;
    this.x = Math.floor(Math.random() * this.effect.width);
    this.y = Math.floor(Math.random() * this.effect.height);
  }
  draw(context) {
    context.fillRect(this.x, this.y, 10, 10);
  }
}

class Effect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.particles = [];
  }
  init() {
    this.particles.push(new Particle(this));
  }
  render(context) {
    this.particles.forEach((particle) => {
        particle.draw(context)
    })
  }
}

const effect = new Effect(canvas.width, canvas.height);
effect.init();
effect.render(ctx)
console.log(effect)
