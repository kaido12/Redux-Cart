
import './App.css';

import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {
  return (
   <>

  <div style={{display:'flex',flexDirection:'row',justifyContent:"space-around"}}>
    <div>
    <ProductList   />
    </div>

    <div>
    <CartList  />
    </div>

  </div>

   

 

   </>
  );
}

export default App;
