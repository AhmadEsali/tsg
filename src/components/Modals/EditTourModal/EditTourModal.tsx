// react
import { useEffect, useRef, useState } from 'react';

// libs
import { Modal } from 'react-responsive-modal';

// styles

// constants
import { Texts } from 'constants/texts';
import Typography from 'components/UI/Typography';
import AppButton from 'components/UI/AppButton';
import {
  ErrorWrapper,
  Input,
  Label,
  ModalBodyContainer,
  ModalContent,
  ModalFooter,
} from '../NewTourModal/newTourModal.styles';

const EditTourModal = ({ setOpen, open, setTours, selectedTour = null }) => {
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

  useEffect(() => {
    if (selectedTour) {
      setTourName(selectedTour.name);
    }
  }, [selectedTour]);

  const submitData = async () => {
    setIsSubmitting(true);
    if (!tourName) {
      setHasError(true);
      return;
    }

    // get the id of the tour and update teh name
    setTours((prev) => {
      const updatedTours = prev.map((tour) => {
        if (tour.id === selectedTour.id) {
          return { ...tour, name: tourName };
        }
        return tour;
      });
      return updatedTours;
    });

    setTimeout(() => {
      setTourName('');
      setHasError(false);
      setIsSubmitting(false);
      setOpen(false);
    }, 500);
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
            {Texts['save']}
          </AppButton>
        </ModalFooter>
      </ModalBodyContainer>
    </Modal>
  );
};

export default EditTourModal;
