import CarItem from 'components/CarItem/CarItem';
import { Wrapper, WrapperList, Text } from './Favorites.styled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectFavorites } from '../../redux/selectors';
import { LoadMore } from 'pages/Catalog/Catalog.styled';
import NavBar from 'components/NavBar/NavBar';

export const Favorites = () => {
  // Використання селектора для отримання обраних автомобілів зі стану Redux
  const favoriteCars = useSelector(selectFavorites);

  // Локальний стан для відстеження сторінки та списку автомобілів для відображення
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);

  /**
   * Функція для завантаження додаткових автомобілів при натисканні на кнопку "Завантажити ще".
   */
  const loadMore = () => {
    const startIndex = page * 8;
    const nextCars = favoriteCars.favorites.slice(startIndex, startIndex + 8);
    setCars([...cars, ...nextCars]);
    setPage(page + 1);
  };

  /**
   * Ефект, який викликається при зміні обраних автомобілів.
   * Ініціалізує список автомобілів для відображення на першій сторінці.
   */
  useEffect(() => {
    const initialCars = favoriteCars.favorites.slice(0, 8);
    setCars(initialCars);
  }, [favoriteCars]);

  return (
    <>
      {/* Навігаційна панель */}
      <NavBar />
      {/* Контейнер для відображення обраних автомобілів */}
      <Wrapper>
        <WrapperList>
          {/* Відображення списку автомобілів або повідомлення про порожній список */}
          {cars.length ? (
            cars.map((favorite, index) => (
              <CarItem key={index} data={favorite} />
            ))
          ) : (
            <Text>Your favorites are currently empty...</Text>
          )}
          {/* Відображення кнопки "Завантажити ще", якщо є ще автомобілі для завантаження */}
          {favoriteCars.favorites.length > cars.length && (
            <LoadMore variant="text" onClick={loadMore}>
              Load more
            </LoadMore>
          )}
        </WrapperList>
      </Wrapper>
    </>
  );
};

export default Favorites;
