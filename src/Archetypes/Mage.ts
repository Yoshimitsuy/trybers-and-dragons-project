import { EnergyType } from '../Energy';
import ArcheType from './Archetype';

export default class Mage extends ArcheType {
  static archetypeInstances = 0;
  private _energyType: EnergyType;
 
  constructor(name: string) {
    super(name);
    Mage.archetypeInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
