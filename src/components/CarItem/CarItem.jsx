import { useState } from 'react';
import Button from 'components/Button/Button';
import {
  Wrapper,
  ImageWrap,
  Image,
  TitleWrap,
  Title,
  Span,
  Text,
  List,
  Item,
} from './CarItem.styled';

import Modal from 'components/Modal/Modal';
import SelectedIcon from 'components/SelectedIcon/SelectedIcon';

export default function CarItem({ data }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
    img,
  } = data;

  return (
    <Wrapper>
      <ImageWrap>
        <SelectedIcon data={data} />
        <Image src={img} alt="Car" />
      </ImageWrap>
      <TitleWrap>
        <Title>
          {make} <Span>{model}</Span>, {year}
        </Title>
        <Text>{rentalPrice}</Text>
      </TitleWrap>
      <List>
        <Item>{address?.split(',')[1]}</Item>
        <Item>{address?.split(',')[2]}</Item>
        <Item>{rentalCompany}</Item>
        <Item>{type}</Item>
        <Item>{model}</Item>
        <Item>{mileage}</Item>
        <Item>{accessories?.[0]}</Item>
      </List>
      <Button onClick={handleOpen} text="Learn more" width="274px" />
      {open && <Modal open={open} onClose={handleClose} data={data} />}
    </Wrapper>
  );
}
