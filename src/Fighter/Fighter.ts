import IEnergy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface IFighter extends SimpleFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: IEnergy;

  special?(enemy: IFighter | SimpleFighter): void;
  levelUp(): void;
}
