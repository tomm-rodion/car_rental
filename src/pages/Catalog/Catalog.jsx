import React, { useEffect, useState } from 'react';
import {
  useGetCarsByPageQuery,
  useGetAdvertsQuery,
} from '../../redux/operations';
import { Loader } from 'components/Loader/Loader';
import NavBar from 'components/NavBar/NavBar';
import CarItem from 'components/CarItem/CarItem';
import Filter from 'components/Filter/Filter';
import { LoadMore, WrapperFilter, WrapperList } from './Catalog.styled';

// Головний компонент каталогу
export const Catalog = () => {
  // Локальний стан для сторінки та списку всіх автомобілів
  const [page, setPage] = useState(1);
  const [allCars, setAllCars] = useState([]);

  // Запит на отримання списку автомобілів за сторінкою
  const { data, error, isLoading, isFetching } = useGetCarsByPageQuery(page);

  // Запит на отримання всіх оголошень
  const { data: allAdverts } = useGetAdvertsQuery();

  // Стан для фільтрів та відфільтрованих оголошень
  const [filters, setFilters] = useState({
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  });
  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  // Функція для завантаження додаткових сторінок
  const loadMore = () => {
    setPage(page + 1);
  };

  // Ефект для додавання нових автомобілів при завантаженні нової сторінки
  useEffect(() => {
    if (data) {
      setAllCars(prevCatalog => [...prevCatalog, ...data]);
    }
  }, [data]);

  // Ефект для виконання фільтрації при зміні фільтрів або оголошень
  useEffect(() => {
    if (isFiltering) {
      if (
        filters.make ||
        filters.filteredPrices.length > 0 ||
        filters.minMileage ||
        filters.maxMileage
      ) {
        const filteredAdverts = allAdverts.filter(advert => {
          if (filters.make && advert.make !== filters.make.value) {
            return false;
          }
          if (
            filters.filteredPrices.length > 0 &&
            !filters.filteredPrices.some(
              priceObj => priceObj.value === advert.rentalPrice.replace('$', '')
            )
          ) {
            return false;
          }
          if (filters.minMileage && advert.mileage < filters.minMileage) {
            return false;
          }
          if (filters.maxMileage && advert.mileage > filters.maxMileage) {
            return false;
          }
          return true;
        });

        setFilteredAdverts(filteredAdverts);
      } else {
        setFilteredAdverts([]);
      }
    }
  }, [filters, allAdverts, isFiltering]);

  // Отримання унікальних значень для фільтрів
  const makes = allAdverts
    ? [...new Set(allAdverts.map(advert => advert.make))]
    : [];
  const prices = allAdverts
    ? [
        ...new Set(
          allAdverts.map(advert => advert.rentalPrice.replace('$', ''))
        ),
      ]
    : [];
  const mileage = allAdverts
    ? [...new Set(allAdverts.map(advert => advert.mileage))]
    : [];
  const minMileage = Math.min(...mileage);
  const maxMileage = Math.max(...mileage);

  // Повернення JSX-коду для відображення компоненту
  return (
    <>
      {/* Навігаційна панель */}
      <NavBar />

      {/* Контейнер для фільтрів */}
      <WrapperFilter>
        {/* Компонент фільтрації з передачею властивостей */}
        <Filter
          makes={makes}
          prices={prices}
          minMileage={minMileage}
          maxMileage={maxMileage}
          onFilterChange={newFilters => {
            setFilters(newFilters);
            setIsFiltering(true);
          }}
          filters={filters}
        />
      </WrapperFilter>

      {/* Контейнер для списку автомобілів */}
      <WrapperList>
        {/* Перевірка на фільтрацію, наявність даних або завантаження */}
        {isFiltering ? (
          // Відображення відфільтрованих оголошень або повідомлення про відсутність співпадінь
          filteredAdverts !== null && filteredAdverts.length > 0 ? (
            filteredAdverts.map((car, index) => (
              <CarItem key={index} data={car} />
            ))
          ) : (
            <div>No matches found based on the chosen criteria.</div>
          )
        ) : error ? (
          // Відображення повідомлення про помилку
          <>Oops, there was an error...</>
        ) : isLoading ? (
          // Відображення компонента завантаження
          <Loader />
        ) : allCars.length > 0 ? (
          // Відображення списку автомобілів
          allCars.map((car, index) => <CarItem key={index} data={car} />)
        ) : null}
        {!isFiltering && data && data.length >= 12 && (
          // Відображення кнопки "Завантажити ще"
          <LoadMore variant="text" onClick={loadMore} disabled={isFetching}>
            Load more
          </LoadMore>
        )}
      </WrapperList>
    </>
  );
};

// Експорт компонента каталогу
export default Catalog;
