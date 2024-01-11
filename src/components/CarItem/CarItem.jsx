import React, { useState } from 'react';

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
import placeholderImage from '../../images/bung.png';

// Компонент для відображення окремого елемента автомобільного списку
const CarItem = ({ data }) => {
  // Стан для відстеження відкриття та закриття модального вікна
  const [open, setOpen] = useState(false);

  // Обробники відкриття та закриття модального вікна
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Деструктуризація властивостей об'єкту data
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
      {/* Компонент відзначення (SelectedIcon) */}
      <ImageWrap>
        <SelectedIcon data={data} />
        {/* Зображення автомобіля */}
        {img ? (
          <Image
            src={img}
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
      </ImageWrap>

      {/* Заголовок та ціна автомобіля */}
      <TitleWrap>
        <Title>
          {make} <Span>{model}</Span>, {year}
        </Title>
        <Text>{rentalPrice}</Text>
      </TitleWrap>

      {/* Список властивостей автомобіля */}
      <List>
        <Item>{address?.split(',')[1]}</Item>
        <Item>{address?.split(',')[2]}</Item>
        <Item>{rentalCompany}</Item>
        <Item>{type}</Item>
        <Item>{model}</Item>
        <Item>{mileage}</Item>
        <Item>{accessories?.[0]}</Item>
      </List>

      {/* Кнопка "Дізнатися більше" з обробником відкриття модального вікна */}
      <Button onClick={handleOpen} text="Learn more" width="274px" />

      {/* Модальне вікно, яке відображається при відкритті */}
      {open && <Modal open={open} onClose={handleClose} data={data} />}
    </Wrapper>
  );
};

export default CarItem;
