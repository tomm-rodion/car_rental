import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import iconClose from '../../images/x.svg';
import placeholderImage from '../../images/bung.png';

import Button from 'components/Button/Button';
import {
  Wrapper,
  CloseIcon,
  IconX,
  WrapInfoContainer,
  Image,
  TextWrap,
  TitleAboutCar,
  Span,
  List,
  Item,
  Description,
  Info,
  ConditionItem,
  ConditionList,
  ConditionSpan,
} from './Modal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 541,
  maxHeight: 830,
  bgcolor: 'background.paper',
  borderRadius: 6,
  boxShadow: 24,
};

export default function BasicModal({ open, onClose, data }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Wrapper>
            <CloseIcon onClick={onClose}>
              <IconX src={iconClose} alt="Close button" />
            </CloseIcon>
            {data.img ? (
              <Image
                src={data.img}
                width="461"
                height="248"
                alt="Car"
                onError={e => {
                  if (e.nativeEvent.status === 401) {
                    return;
                  }
                }}
              />
            ) : (
              <Image src={placeholderImage} alt="Placeholder" />
            )}

            <WrapInfoContainer>
              <TextWrap>
                <TitleAboutCar>
                  {data.make} <Span>{data.model}, </Span>
                  {data.year}
                </TitleAboutCar>
              </TextWrap>
              <List>
                <Item>{data.address.split(',')[1]}</Item>
                <Item>{data.address.split(',')[2]}</Item>
                <Item>Id: </Item>
                <Item>Year: {data.year}</Item>
                <Item>Type: {data.type}</Item>
              </List>
              <List>
                <Item>Fuel Consumption: {data.fuelConsumption}</Item>
                <Item>Engine Size: {data.engineSize}</Item>
              </List>
              <Description>{data.description}</Description>
              <Info>Accessories and functionalities:</Info>
              <List>
                {data.accessories.map(item => (
                  <Item key={item}>{item}</Item>
                ))}
              </List>
              <List>
                {data.functionalities.map(item => (
                  <Item key={item}>{item}</Item>
                ))}
              </List>
              <Info>Rental Conditions:</Info>
              <ConditionList>
                <ConditionItem>
                  Minimum age:{' '}
                  <ConditionSpan>
                    {new Date().getFullYear() - data.year}
                  </ConditionSpan>
                </ConditionItem>
                <ConditionItem>
                  {data.rentalConditions.split('\n')[1]}
                </ConditionItem>
                <ConditionItem>
                  {data.rentalConditions.split('\n')[2]}
                </ConditionItem>
                <ConditionItem>
                  Mileage:{' '}
                  <ConditionSpan>
                    {data.mileage.toLocaleString('en-US')}
                  </ConditionSpan>
                </ConditionItem>
                <ConditionItem>
                  Price: <ConditionSpan>{data.rentalPrice}</ConditionSpan>
                </ConditionItem>
              </ConditionList>
            </WrapInfoContainer>
            <Button
              text="Rental car"
              width="168px"
              onClick={() => {
                window.location.href = 'tel:+380730000000';
              }}
            />
          </Wrapper>
        </Box>
      </Modal>
    </div>
  );
}
