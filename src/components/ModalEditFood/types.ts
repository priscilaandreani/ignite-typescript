import { IFood } from '../../pages/Dashboard/types';

export interface ModalEditFoodParams {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  handleUpdateFood: (food: IFood) => void;
  editingFood?: IFood;
}
