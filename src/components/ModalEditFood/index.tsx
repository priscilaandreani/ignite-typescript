import { useCallback, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { ModalEditFoodParams } from './types';
import { IFood } from '../../pages/Dashboard/types';

export function ModalEditFood({
  isOpen,
  setIsOpen,
  handleUpdateFood,
  editingFood,
}: ModalEditFoodParams) {
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data: IFood) => {
      handleUpdateFood(data);
      setIsOpen(false);
    },
    [handleUpdateFood, setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name='image' placeholder='Cole o link aqui' icon={null} />

        <Input name='name' placeholder='Ex: Moda Italiana' icon={null} />
        <Input name='price' placeholder='Ex: 19.90' icon={null} />

        <Input name='description' placeholder='Descrição' icon={null} />

        <button type='submit' data-testid='edit-food-button'>
          <div className='text'>Editar Prato</div>
          <div className='icon'>
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}