import { useState } from 'react';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';
import CabinTable from './CabinTable';

function AddCabin() {
  return (
    <>
      <Modal>
        <Modal.Open opens='cabin-form'>
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
          <CreateCabinForm />
        </Modal.Window>
      </Modal>

      <Modal>
        <Modal.Open opens='table'>
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name='table'>
          <CabinTable />
        </Modal.Window>
      </Modal>
    </>
  );
}
/* function AddCabin() {
  const [isOpernModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal(!isOpernModal)}>
        Add new Cabin
      </Button>

      {isOpernModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
} */

export default AddCabin;
