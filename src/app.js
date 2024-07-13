"use strict"

class Enemy {
  constructor(health) {
    this.health = health
  };

  recieveDamage(damage){
    if (this.hitPoint <= 0) {
      return console.log("Enemy is killed");
    }
    this.health = this.health - damage
  }

}

class Sword{
  #damage
  constructor(damage){
    this.#damage = damage
  }

  strike(enemy) {
    enemy.recieveDamage(this.#damage)
  }

}

class Orc extends Enemy {
  constructor(health) {
    super(health)
  };

  recieveDamage(damage){
    if(Math.random()*100 < 50){
      return console.log("miss");
    } else {
      this.health = this.health - damage
    }
    if (this.health <= 0) {
      this.health = 0
      return console.log("Enemy is killed");
    }
  }
}

const orkLoh = new Orc (100);
const sword = new Sword (40)
console.log(orkLoh);
sword.strike(orkLoh)
sword.strike(orkLoh)
console.log(orkLoh);