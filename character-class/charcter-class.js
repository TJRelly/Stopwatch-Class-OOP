class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
    this.gold = 10;// Gold is always 10 for new characters
    this.keys = 1;// Gold is always 10 for new characters
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        const bonusGold = target.gold
        const bonusKeys = target.keys
        console.log(
          `${this.name} eliminated ${target.name}, wins ${bonusXP} experience points, ${bonusGold} gold and ${bonusKeys} key(s)`
        );
        this.xp += bonusXP;
        this.gold += bonusGold;
        this.keys += bonusKeys;
      }
    } else {
      console.log(`${this.name} can’t attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.keys} key(s)`;
  }
}
console.log('Welcome to the adventure! Here are our heroes:')

const aurora = new Character('Aurora', 150, 25)
console.log(aurora.describe())

const glacius = new Character('Glacius', 130, 30)
console.log(glacius.describe())

const monster = new Character('Spike', 40, 20)
console.log(`A wild monster has appeared: it's named ${monster.name}`)

monster.attack(aurora)
monster.attack(glacius)
aurora.attack(monster)
glacius.attack(monster)

console.log(aurora.describe())
console.log(glacius.describe())
