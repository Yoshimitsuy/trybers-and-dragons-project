import Race from './Race';

export default class Orcs extends Race {
  private _maxLifePoints: number;
  static raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orcs.raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orcs.raceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}