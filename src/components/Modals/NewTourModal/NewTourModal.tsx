// react
import { useRef, useState } from 'react';

// libs
import { Modal } from 'react-responsive-modal';
import { v4 as uuidv4 } from 'uuid';

// styles
import {
  ErrorWrapper,
  Input,
  Label,
  ModalBodyContainer,
  ModalContent,
  ModalFooter,
} from './newTourModal.styles';

// constants
import { Texts } from 'constants/texts';
import Typography from 'components/UI/Typography';
import AppButton from 'components/UI/AppButton';
import { authAPI } from 'api/auth';
import toast from 'react-hot-toast';

const NewTourModal = ({ setOpen, open, fetchTours }) => {
  // states
  const [tourName, setTourName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);
  // hooks
  const modalRef = useRef(null);

  // handlers

  const handleNameChange = (e) => {
    setTourName(e.target.value);
  };

  // apis
  const submitData = async () => {
    setIsSubmitting(true);
    if (!tourName) {
      setHasError(true);
      return;
    }

    try {
      const response = await authAPI.createTour(tourName);
      if (response.status !== 200 || !response.data.data) {
        toast.error('Error creating tour');
        return;
      }

      setTourName('');
      fetchTours();
      setHasError(false);
      setOpen(false);
    } catch (error) {
      toast.error('Error creating tour');
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
          {Texts['tourAnlegen']}
        </Typography>
        <ModalContent>
          <Label>{Texts['tourName']}</Label>
          <Input
            value={tourName}
            name='tour'
            placeholder='e.g. Z01'
            onChange={handleNameChange}
            hasError={hasError}
          />
          {hasError ? (
            <ErrorWrapper>
              <p>Tour name is required</p>
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
            {Texts['tourAnlegen']}
          </AppButton>
        </ModalFooter>
      </ModalBodyContainer>
    </Modal>
  );
};

export default NewTourModal;
