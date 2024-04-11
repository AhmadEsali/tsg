// react
import { useRef, useState } from 'react';

// libs
import { Modal } from 'react-responsive-modal';
// import { v4 as uuidv4 } from 'uuid';

// styles
import {
  ErrorWrapper,
  // ErrorWrapper,
  Input,
  Label,
  ModalBodyContainer,
  ModalContent,
  ModalFooter,
} from './swapCardModal.styles';

// constants
import { Texts } from 'constants/texts';
import Typography from 'components/UI/Typography';
import AppButton from 'components/UI/AppButton';
import { authAPI } from 'api/auth';
import toast from 'react-hot-toast';

const SwapCardModal = ({ setOpen, open, selectedCard }) => {
  console.log('🚀 ~ SwapCardModal ~ selectedCard:', selectedCard);
  // states
  const [newDate, setNewDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);
  // hooks
  const modalRef = useRef(null);

  // handlers

  const handleNameChange = (e) => {
    setNewDate(e.target.value);
  };

  const submitData = async () => {
    setIsSubmitting(true);
    if (!newDate) {
      setHasError(true);
      return;
    }

    // get the id of the tour and update teh name

    try {
      const response = await authAPI.updateMissionDate(newDate, selectedCard.id);
      if (response.status !== 200 || !response.data.data) {
        toast.error(Texts['somethingWentWrong']);
        return;
      }

      setNewDate('');
      setHasError(false);
      setOpen(false);
    } catch (error) {
      toast.error(Texts['somethingWentWrong']);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Modal
      ref={modalRef}
      open={open}
      onClose={() => setOpen(false)}
      initialFocusRef={modalRef}
      showCloseIcon={false}
      closeOnOverlayClick={true}
      classNames={{
        root: 'custom-root',
        modal: 'app-modal application-name-app-modal',
        closeButton: 'app-modal-close',
      }}
      center
    >
      <ModalBodyContainer>
        <Typography variant='h1' color='navy-11' weight={700}>
          {Texts['moveCardTitle']}
        </Typography>
        <ModalContent>
          <Label>{Texts['moveCardInputLabel']}</Label>
          <Input
            value={newDate}
            name='tour'
            placeholder='e.g. Z01'
            onChange={handleNameChange}
            hasError={hasError}
            type='date'
          />
          {hasError ? (
            <ErrorWrapper>
              <p>Date is required</p>
            </ErrorWrapper>
          ) : null}
        </ModalContent>
        <ModalFooter>
          <AppButton variant='secondary' size='sm' onClick={() => setOpen(false)}>
            {Texts['cancel']}
          </AppButton>
          <AppButton
            size='sm'
            onClick={() => submitData()}
            disabled={isSubmitting}
            loader={isSubmitting}
          >
            {Texts['move']}
          </AppButton>
        </ModalFooter>
      </ModalBodyContainer>
    </Modal>
  );
};

export default SwapCardModal;
