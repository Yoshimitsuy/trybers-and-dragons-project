import { EnergyType } from '../Energy';
import ArcheType from './Archetype';

export default class Ranger extends ArcheType {
  static archetypeInstances = 0;
  private _energyType: EnergyType;
 
  constructor(name: string) {
    super(name);
    Ranger.archetypeInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Ranger.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
