import { EnergyType } from '../Energy';
import ArcheType from './Archetype';

export default class Warrior extends ArcheType {
  static archetypeInstances = 0;
  private _energyType: EnergyType;
 
  constructor(name: string) {
    super(name);
    Warrior.archetypeInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
