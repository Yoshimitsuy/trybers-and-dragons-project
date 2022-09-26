import IEnergy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface IFighter extends SimpleFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: IEnergy;
  attack(enemy: IFighter | SimpleFighter): void;
  special?(enemy: IFighter | SimpleFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}
