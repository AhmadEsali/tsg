// react
import { useRef } from 'react';

// libs
import { Modal } from 'react-responsive-modal';

// styles
import {
  CardDescription,
  CompanyInfo,
  DataColumn,
  DataItem,
  DataWrapper,
  LinkInfo,
  ModalBodyContainer,
  ModalContent,
  Tag,
  TagsWrapper,
} from './cardInfoModal.styles';

// constants
import Typography from 'components/UI/Typography';
import { LinkIcon } from 'components/icons';

const CardInfoModal = ({ setOpen, open }) => {
  const modalRef = useRef(null);

  // handlers

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
        <ModalContent>
          <Typography variant='h5' color='navy-8'>
            Jan 20, 2024
          </Typography>
          <CompanyInfo>
            <Typography variant='h2' color='navy-11' weight={700}>
              Company’s Name,
            </Typography>
            <Typography variant='h2' color='navy-11' weight={400}>
              BG-123154-FSJA
            </Typography>
          </CompanyInfo>
          <TagsWrapper>
            <Typography variant='h2' color='navy-11' weight={400}>
              Tour
            </Typography>
            <Tag>A01</Tag>
            <LinkInfo>
              <LinkIcon />
              <Typography variant='h3' color='navy-10' weight={400}>
                Docuware Form Link
              </Typography>
            </LinkInfo>
          </TagsWrapper>
          <DataWrapper>
            <DataColumn>
              <DataItem>
                <Typography variant='h3' color='navy-8' weight={400}>
                  Baustelle
                </Typography>
                <Typography variant='h3' color='navy-11' weight={400}>
                  CompanySite.com
                </Typography>
              </DataItem>
              <DataItem>
                <Typography variant='h3' color='navy-8' weight={400}>
                  PLZ Baustelle
                </Typography>
                <Typography variant='h3' color='navy-11' weight={400}>
                  123456
                </Typography>
              </DataItem>
              <DataItem>
                <Typography variant='h3' color='navy-8' weight={400}>
                  Telefonnummer
                </Typography>
                <Typography variant='h3' color='navy-11' weight={400}>
                  +49 30 12345678
                </Typography>
              </DataItem>
              <DataItem>
                <Typography variant='h3' color='navy-8' weight={400}>
                  Zeit
                </Typography>
                <Typography variant='h3' color='navy-11' weight={400}>
                  13:30
                </Typography>
              </DataItem>
              <DataItem>
                <Typography variant='h3' color='navy-8' weight={400}>
                  Gesamtgewicht in T aus Tabelle
                </Typography>
                <Typography variant='h3' color='navy-11' weight={400}>
                  3 Tons
                </Typography>
              </DataItem>
              <DataItem>
                <Typography variant='h3' color='navy-8' weight={400}>
                  Fahrzeug
                </Typography>
                <Typography variant='h3' color='navy-11' weight={400}>
                  Car 12345
                </Typography>
              </DataItem>
              <DataItem>
                <Typography variant='h3' color='navy-8' weight={400}>
                  Liefertermin
                </Typography>
                <Typography variant='h3' color='navy-11' weight={400}>
                  Jan 20, 2024
                </Typography>
              </DataItem>
            </DataColumn>
            <DataColumn>
              <DataItem>
                <Typography variant='h3' color='navy-8' weight={400}>
                  Kudennummer
                </Typography>
                <Typography variant='h3' color='navy-11' weight={400}>
                  +49 30 12345678
                </Typography>
              </DataItem>
              <DataItem>
                <Typography variant='h3' color='navy-8' weight={400}>
                  Best Nr
                </Typography>
                <Typography variant='h3' color='navy-11' weight={400}>
                  123456
                </Typography>
              </DataItem>
              <DataItem>
                <Typography variant='h3' color='navy-8' weight={400}>
                  Ansprechpartner
                </Typography>
                <Typography variant='h3' color='navy-11' weight={400}>
                  +49 30 12345678
                </Typography>
              </DataItem>
              <DataItem>
                <Typography variant='h3' color='navy-8' weight={400}>
                  Bundgewicht
                </Typography>
                <Typography variant='h3' color='navy-11' weight={400}>
                  3 Tons
                </Typography>
              </DataItem>
              <DataItem>
                <Typography variant='h3' color='navy-8' weight={400}>
                  Bestelldatum
                </Typography>
                <Typography variant='h3' color='navy-11' weight={400}>
                  Jan 20, 2024
                </Typography>
              </DataItem>
              <DataItem>
                <Typography variant='h3' color='navy-8' weight={400}>
                  Info Trebbin
                </Typography>
                <Typography variant='h3' color='navy-11' weight={400}>
                  Yes
                </Typography>
              </DataItem>
            </DataColumn>
          </DataWrapper>
          <CardDescription>
            <Typography variant='h3' color='navy-8' weight={400}>
              Bemerkung
            </Typography>
            <Typography variant='h3' color='navy-11' weight={400}>
              Lorem ipsum dolor sit amet consectetur. Id et tellus mollis id mauris ut. Quis augue
              dignissim tempus sit vel neque. Sit dapibus donec morbi arcu proin donec arcu lobortis
              nibh. Nunc interdum vehicula porttitor rhoncus id phasellus dignissim urna.
            </Typography>
          </CardDescription>
        </ModalContent>
      </ModalBodyContainer>
    </Modal>
  );
};

export default CardInfoModal;
