import ArcheType, { Mage, Necromancer, Ranger, Warrior } from './Archetypes';
import IEnergy from './Energy';
import IFighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements IFighter {
  private _race: Race;
  private _archetype: ArcheType;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: IEnergy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType, amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): IEnergy | undefined {
    return {
      type_: this._archetype.energyType,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: IFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);

    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: IFighter): void {
    if (Warrior && Ranger) {
      const ultimate1 = this._strength * 4;
      const ultimate2 = this._defense * 4;
      const special = ultimate1 + ultimate2;
      enemy.receiveDamage(special);
    }

    if (Mage && Necromancer) {
      const ultimate1 = this._dexterity * 8;
      const ultimate2 = this._energy.amount * 2;
      const special = ultimate1 + ultimate2;
      enemy.receiveDamage(special);
    }
  }
}