import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Products from './components/Products';
import SearchBar from './components/SearchBar';
import { Product, State } from './utils/types';
import GlobalStyle, { MainStyled } from './GlobalStyle';

function App() {
  const stateProducts = useSelector<State, Product[]>(state => state.products);  
  const [filterValue, setFilterValue] = useState<string>('');

  const prodFilter = useMemo(() => {
    if (!filterValue.length) {
      return [...stateProducts];
    } else {
      return stateProducts.filter(prod => prod.name.includes(filterValue));
    }
  }, [stateProducts, filterValue]);
  
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainStyled>
        <SearchBar setFilter={setFilterValue} />
        <Products products={prodFilter} />
      </ MainStyled>
    </>
  );
};

export default App;
