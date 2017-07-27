
/* Design several classes and their relationships for an RPG videogame.
 * Classes:
 * NPC -> Humanoid, Animal, Plant
 * Humanoid -> Human, Elf, Orc
 * Animal -> Bear, Wolf
 * Plant -> FleshEatingDaisy
 *
 * Human -> Soldier, Peasant, Bandit
 *
 * NPC should be a general class for a non-player character in the game.
 * This class will probably include general attributes like hp, strength, speed, etc.
 *
 * Humanoid, Animal, and Plant should all inherit from NPC.  The classes
 * shown to the right of the arrow are classes that will inherit
 * from those classes.
 *
 * Soldier, Peasant, and Bandit should all inherit from Human.
 *
 * Create properties for these different classes that fit with the character.
 *
 * This is how you would structure the game objects in an actual game
 * application in Unity or another similar framework.
 */

class Npc {
  constructor (options) {
    this.hp = options.hp;
    this.strength = options.strength;
    this.speed = options.speed;
  }
}

class Humanoid extends Npc {
  constructor (options) {
    super()
  }
}

class Human extends Humanoid {
  constructor (options) {
    super()
  }
}

class Soldier extends Human {
  constructor (options) {
    super()
  }
}
class Peasant extends Human {
  constructor (options) {
    super()
  }
}
class Bandit extends Human {
  constructor (options) {
    super()
  }
}

class Elf extends Humanoid {
  constructor (options) {
    super()
  }
}

class Orc extends Humanoid {
  constructor (options) {
    super()
  }
}

class Animal extends Npc {
  constructor (options) {
    super()
  }
}

class Bear extends Animal {
  constructor (options) {
    super()
  }
}


class Wolf extends Animal {
  constructor (options) {
    super()
  }
}

class Plant extends Npc {
  constructor (options) {
    super()
  }
}

class FleshEatingDaisy extends Plant {
  constructor (options) {
    super()
  }
}
