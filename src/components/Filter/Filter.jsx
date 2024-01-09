import React, { useState } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import Button from 'components/Button/Button';
import {
  Container,
  Form,
  InputContainer,
  InputLeft,
  InputRight,
  Label,
  SelectContainer,
  SpanLeft,
  SpanRight,
} from './Filter.styled';

// Компонент фільтрації для автомобілів
const Filter = ({ makes, prices, onFilterChange }) => {
  // Стан для зберігання вибраних опцій та значень
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPriceStep, setSelectedPriceStep] = useState(null);
  const [selectedPriceLabel, setSelectedPriceLabel] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  // Перетворення масиву марок автомобілів у формат опцій для Select
  const makeOptions = makes.map(make => ({ value: make, label: make }));

  // Генерація діапазону цін для вибору
  const priceRangeOptions = Array.from({ length: 48 }, (_, index) => {
    const price = 30 + index * 10;
    return { value: price, label: `${price}` };
  });

  // Обробник зміни вибраної цінової категорії
  const handlePriceStepChange = selectedOption => {
    setSelectedPriceStep(selectedOption.value);
    setSelectedPriceLabel(selectedOption.label);
  };

  // Фільтрація цін відповідно до вибраної цінової категорії
  const filteredPrices = prices.filter(price => price <= selectedPriceStep);

  // Форматування введених значень для відображення в компоненті
  const formatMileage = value => {
    const cleanedValue = value.toString().replace(/,/g, '');
    const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedValue;
  };

  // Обробник зміни введених значень
  const handleInputChange = (e, setValue) => {
    setValue(e.target.value);
  };

  // Обробник кнопки фільтрації
  const handleFilterClick = () => {
    const minMileage = parseInt(minValue.replace(/,/g, ''), 10);
    const maxMileage = parseInt(maxValue.replace(/,/g, ''), 10);

    // Перевірка, чи максимальний пробіг перевищує мінімальний
    if (minMileage > maxMileage) {
      toast.error('The maximum mileage must exceed the minimum mileage.');
      return;
    }

    // Створення об'єкта з новими фільтрами та передача їх до батьківського компонента
    const newFilters = {
      make: selectedMake,
      filteredPrices: filteredPrices.map(price => ({
        value: price,
        label: `${price}`,
      })),
      minMileage,
      maxMileage,
    };

    onFilterChange(newFilters);
  };

  return (
    <Container>
      {/* Вибір марки автомобіля */}
      <SelectContainer>
        <Label htmlFor="nameSelect">Car brand</Label>
        <Select
          id="nameSelect"
          placeholder="Enter the text"
          value={selectedMake}
          isClearable={true}
          onChange={selectedOption => setSelectedMake(selectedOption)}
          options={makeOptions}
          styles={selectStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </SelectContainer>

      {/* Вибір ціни за 1 годину */}
      <SelectContainer>
        <Label htmlFor="priceSelect">Price / 1 hour</Label>
        <Select
          id="priceSelect"
          placeholder="To $"
          value={
            selectedPriceStep
              ? { value: selectedPriceStep, label: selectedPriceLabel }
              : null
          }
          onChange={handlePriceStepChange}
          options={priceRangeOptions}
          styles={selectStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </SelectContainer>

      {/* Введення пробігу автомобіля */}
      <Form>
        <Label>Car mileage / km</Label>
        <InputContainer>
          <InputLeft
            type="text"
            value={formatMileage(minValue)}
            onChange={e => handleInputChange(e, setMinValue)}
          />
          <SpanLeft>From</SpanLeft>
          <InputRight
            type="text"
            value={formatMileage(maxValue)}
            onChange={e => handleInputChange(e, setMaxValue)}
          />
          <SpanRight>To</SpanRight>
        </InputContainer>
      </Form>

      {/* Кнопка для виклику фільтрації */}
      <Button text="Search" onClick={handleFilterClick} width="135px" />
    </Container>
  );
};

// Стилі для кастомізації Select
const selectStyles = {
  control: styles => ({
    ...styles,
    width: '224px',
    height: '48px',
    borderColor: 'rgba(18, 20, 23, 0.2)',
    border: 'none',
    borderRadius: '14px',
    padding: '8px',
    fontSize: '16px',
    fontFamily: 'Manrope',
    backgroundColor: 'rgba(247, 247, 251, 1)',
    appearance: 'none',
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
    fontFamily: 'Manrope',
  }),
  placeholder: styles => ({
    ...styles,
    color: 'rgba(18, 20, 23, 1)',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
};

export default Filter;
