import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.raceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}