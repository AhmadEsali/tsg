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
  DeleteButton,
  ErrorWrapper,
  Input,
  Label,
  ModalBodyContainer,
  ModalContent,
  ModalFooter,
} from '../NewTourModal/newTourModal.styles';
import { authAPI } from 'api/auth';
import toast from 'react-hot-toast';

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

  const handleDeleteTour = async () => {
    try {
      const response = await authAPI.deleteTour(selectedTour.id);
      if (response.status !== 200) {
        toast.error('Error deleting tour');
        return;
      }

      setTours((prev) => prev.filter((tour) => tour.id !== selectedTour.id));
      setOpen(false);
    } catch (error) {
      toast.error('Error deleting tour');
    }
  };

  const submitData = async () => {
    setIsSubmitting(true);
    if (!tourName) {
      setHasError(true);
      return;
    }

    // get the id of the tour and update teh name

    try {
      const response = await authAPI.updateTours(tourName, selectedTour.id);
      if (response.status !== 200 || !response.data.data) {
        toast.error('Error updating tour');
        return;
      }

      setTours((prev) => {
        const updatedTours = prev.map((tour) => {
          if (tour.id === selectedTour.id) {
            return { ...tour, name: tourName };
          }
          return tour;
        });
        return updatedTours;
      });

      setTourName('');
      setHasError(false);
      setOpen(false);
    } catch (error) {
      toast.error('Error updating tour');
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
          <DeleteButton onClick={handleDeleteTour}>{Texts['delete']}</DeleteButton>
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
