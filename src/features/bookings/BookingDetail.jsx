import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BookingDataBox from './BookingDataBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';
import { useBooking } from './useBooking';
import { useMoveBack } from '../../hooks/useMoveBack';
import Spinner from '../../ui/Spinner';
import { HiArrowUpOnSquare } from 'react-icons/hi2';
import { useCheckout } from '../check-in-out/useCheckout';
import Modal from '../../ui/Modal';
import { useDeleteBooking } from './useDeleteBooking';
import ConfirmDelete from '../../ui/ConfirmDelete';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isPending } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { delBooking, isDeleting } = useDeleteBooking();
  const navigate = useNavigate();
  const moveBack = useMoveBack();
  if (isPending) return <Spinner />;
  const { status, id } = booking;

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <>
      <Row type='horizontal'>
        <HeadingGroup>
          <Heading as='h1'>Booking #{id}</Heading>
          <Tag type={statusToTagName[status]}>{status?.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${id}`)}>Check in</Button>
        )}

        {status === 'checked-in' && (
          <Button onClick={() => checkout(id)} disabled={isCheckingOut}>
            Check out
          </Button>
        )}
        <Modal>
          <Modal.Open opens='delete'>
            <Button variation='danger' disabled={isDeleting}>
              Delete
            </Button>
          </Modal.Open>
          <Modal.Window name='delete'>
            <ConfirmDelete
              resourceName='booking'
              disabled={isDeleting}
              onConfirm={() =>
                delBooking(id, { onSettled: () => navigate(-1) })
              }
            ></ConfirmDelete>
          </Modal.Window>
        </Modal>

        <Button variation='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
