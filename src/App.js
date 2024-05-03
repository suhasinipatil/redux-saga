import ProductList from './ProductList';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const data = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Cart</h2>
      {data.totalCount > 0 && <p>Total Count: {data.totalCount}</p>}
      <ProductList />
    </div>
  );
}

export default App;
