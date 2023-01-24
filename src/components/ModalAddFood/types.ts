import { IFood } from '../../pages/Dashboard/types';

export interface ModalAddFoodParams {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  handleAddFood: (food: IFood) => void;
}
