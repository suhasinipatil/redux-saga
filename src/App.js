import ProductList from './ProductList';
import './App.css';
import { useSelector } from 'react-redux';
import ProductContainer from './ProductContainer';

function App() {
  const data = useSelector((state) => state.cart);

  return (
    <div>
      <h1>React App</h1>
      <h2>Cart</h2>
      {data.totalCount > 0 && <p>Total Count: {data.totalCount}</p>}
      <ProductContainer />
      {/* <ProductList /> */}
    </div>
  );
}

export default App;
