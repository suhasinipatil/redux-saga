import ProductList from './ProductList';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const data = useSelector((state) => state.cart);
  console.log(data);
  return (
    <div>
      <h1>React App</h1>
      <h2>Cart</h2>
      {data.length}
      {data.cart.map((item) => {
        return (
          <li key={item.id}>
            {item.title} - {item.quantity}
          </li>
        );
      })}
      <ProductList />
    </div>
  );
}

export default App;
