
function Ninja(name){
  this.name = name;
  this.health = 100;
  speed = 3;
  strength = 3;
}
Ninja.prototype.sayName = function(){
  console.log(this.name);
}
Ninja.prototype.showStats = function(){
  console.log('Health:' + this.health);
  console.log("Strength: " + strength);
  console.log("Speed: " + speed);
}
Ninja.prototype.drinkSake = function(){
  strength += 10;
}
Ninja.prototype.punch = function(ninja){
  ninja.health -= 5;
  console.log(`${ninja.name} was punched by ${this.ninja} for 5 health.`);
}
Ninja.prototype.kick = function(ninja){
  var damage = 15 * strength;
  ninja.health = ninja.health - damage;
  console.log(`${ninja.name} was kicked by ${this.ninja} for ${damage} health.`);
}
Ninja.prototype.isNinja = function(ninja){
  return (ninja instanceof Ninja);
}
ninja_david = new Ninja('Super Dave')
ninja_blaze = new Ninja("Blaze Amaze")
console.log(ninja_blaze)
ninja_blaze.sayName();
ninja_blaze.showStats();
ninja_blaze.drinkSake();
ninja_blaze.showStats();
ninja_blaze.punch(ninja_david);
ninja_david.showStats();
ninja_blaze.kick(ninja_david);
ninja_david.showStats();
console.log(ninja_david.isNinja(ninja_blaze));
