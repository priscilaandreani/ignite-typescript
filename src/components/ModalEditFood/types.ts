import { IFood } from '../../pages/Dashboard/types';

export interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  handleUpdateFood: (food: IFood) => void;
  editingFood?: IFood;
}
