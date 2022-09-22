import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.raceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}