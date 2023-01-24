import { IFood } from '../../pages/Dashboard/types';

export interface FoodProps {
  food: IFood;
  handleDelete: (id: number) => void;
  handleEditFood: (food: IFood) => void;
}
