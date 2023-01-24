import { IFood } from '../../pages/Dashboard/types';

export interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  handleAddFood: (food: IFood) => void;
}
